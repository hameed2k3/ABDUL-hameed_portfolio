import { type NextRequest, NextResponse } from "next/server"

export async function GET(request: NextRequest, props: { params: Promise<{ username: string }> }) {
  const params = await props.params
  const { username } = params

  try {
    // Method 1: Try LeetCode GraphQL API (unofficial)
    const graphqlQuery = {
      query: `
        query getUserProfile($username: String!) {
          matchedUser(username: $username) {
            username
            profile {
              ranking
              userAvatar
              realName
              aboutMe
              school
              websites
              countryName
              company
              jobTitle
              skillTags
              postViewCount
              postViewCountDiff
              reputation
              reputationDiff
              solutionCount
              solutionCountDiff
            }
            submitStats: submitStatsGlobal {
              acSubmissionNum {
                difficulty
                count
                submissions
              }
            }
          }
        }
      `,
      variables: { username },
    }

    const response = await fetch("https://leetcode.com/graphql", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36",
      },
      body: JSON.stringify(graphqlQuery),
    })

    if (!response.ok) {
      throw new Error("LeetCode API request failed")
    }

    const data = await response.json()

    if (!data.data?.matchedUser) {
      throw new Error("User not found")
    }

    const user = data.data.matchedUser
    const submitStats = user.submitStats?.acSubmissionNum || []

    // Parse submission stats
    const easyStats = submitStats.find((stat: any) => stat.difficulty === "Easy") || { count: 0 }
    const mediumStats = submitStats.find((stat: any) => stat.difficulty === "Medium") || { count: 0 }
    const hardStats = submitStats.find((stat: any) => stat.difficulty === "Hard") || { count: 0 }

    const totalSolved = easyStats.count + mediumStats.count + hardStats.count

    // Format response
    const leetcodeData = {
      username: user.username,
      totalSolved,
      totalQuestions: 3671, // This is relatively static
      easySolved: easyStats.count,
      easyTotal: 895,
      mediumSolved: mediumStats.count,
      mediumTotal: 1911,
      hardSolved: hardStats.count,
      hardTotal: 865,
      acceptanceRate:
        totalSolved > 0
          ? Math.round((totalSolved / (easyStats.submissions + mediumStats.submissions + hardStats.submissions)) * 100)
          : 0,
      ranking: user.profile?.ranking || 0,
      contributionPoints: user.profile?.reputation || 0,
      streak: 0, // This requires additional API calls
      maxStreak: 0,
      totalActiveDays: 0,
      submissionsInLastYear: 0,
      recentSubmissions: [], // This requires additional API calls
      languages: [], // This requires additional API calls
      badges: 0,
    }

    return NextResponse.json(leetcodeData)
  } catch (error) {
    console.error("Error fetching LeetCode data:", error)

    // Fallback: Return your current actual data
    const fallbackData = {
      username: "hameed2k3",
      totalSolved: 4,
      totalQuestions: 3671,
      easySolved: 3,
      easyTotal: 895,
      mediumSolved: 1,
      mediumTotal: 1911,
      hardSolved: 0,
      hardTotal: 865,
      acceptanceRate: 80.0,
      ranking: 5000000,
      contributionPoints: 0,
      streak: 1,
      maxStreak: 1,
      totalActiveDays: 3,
      submissionsInLastYear: 5,
      recentSubmissions: [
        { title: "Add Two Numbers", difficulty: "Medium", status: "Accepted", timestamp: "1 month ago" },
        { title: "Two Sum", difficulty: "Easy", status: "Accepted", timestamp: "2 months ago" },
        {
          title: "Find the Original Typed String I",
          difficulty: "Easy",
          status: "Accepted",
          timestamp: "2 months ago",
        },
      ],
      languages: [
        { name: "Python3", problemsSolved: 3 },
        { name: "Java", problemsSolved: 1 },
      ],
      badges: 0,
    }

    return NextResponse.json(fallbackData)
  }
}
