"use client"

import { useState, useEffect, useCallback } from "react"
import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { RefreshCw, Trophy, Target, Calendar, TrendingUp, Code2, CheckCircle, User } from "lucide-react"

// Updated LeetCode data structure with your actual stats
interface LeetCodeStats {
  username: string
  totalSolved: number
  totalQuestions: number
  easySolved: number
  easyTotal: number
  mediumSolved: number
  mediumTotal: number
  hardSolved: number
  hardTotal: number
  acceptanceRate: number
  ranking: number
  contributionPoints: number
  streak: number
  maxStreak: number
  totalActiveDays: number
  submissionsInLastYear: number
  recentSubmissions: Array<{
    title: string
    difficulty: "Easy" | "Medium" | "Hard"
    status: "Accepted" | "Wrong Answer" | "Time Limit Exceeded"
    timestamp: string
  }>
  languages: Array<{
    name: string
    problemsSolved: number
  }>
  badges: number
}

// Your actual LeetCode data from the screenshot
const actualLeetCodeData: LeetCodeStats = {
  username: "hameed2k3",
  totalSolved: 4,
  totalQuestions: 3671,
  easySolved: 3,
  easyTotal: 895,
  mediumSolved: 1,
  mediumTotal: 1911,
  hardSolved: 0,
  hardTotal: 865,
  acceptanceRate: 80.0, // Estimated based on successful submissions
  ranking: 5000000, // Approximately as shown
  contributionPoints: 0,
  streak: 1,
  maxStreak: 1,
  totalActiveDays: 3,
  submissionsInLastYear: 5,
  recentSubmissions: [
    { title: "Add Two Numbers", difficulty: "Medium", status: "Accepted", timestamp: "1 month ago" },
    { title: "Two Sum", difficulty: "Easy", status: "Accepted", timestamp: "2 months ago" },
    { title: "Find the Original Typed String I", difficulty: "Easy", status: "Accepted", timestamp: "2 months ago" },
  ],
  languages: [
    { name: "Python3", problemsSolved: 3 },
    { name: "Java", problemsSolved: 1 },
  ],
  badges: 0,
}

export default function LeetCodeProfile() {
  const [stats, setStats] = useState<LeetCodeStats>(actualLeetCodeData)
  const [isRefreshing, setIsRefreshing] = useState(false)
  const [lastUpdated, setLastUpdated] = useState<Date>(new Date())

  // Function to fetch live LeetCode data
  const fetchLeetCodeData = useCallback(
    async (username: string) => {
      try {
        // Using local API route which provides a fallback
        const response = await fetch(`/api/leetcode/${username}`)

        if (!response.ok) {
          throw new Error("Failed to fetch LeetCode data")
        }

        const data = await response.json()

        // Transform the API response to match our interface
        return {
          username: data.username || username,
          totalSolved: data.totalSolved || 0,
          totalQuestions: data.totalQuestions || 3671,
          easySolved: data.easySolved || 0,
          easyTotal: data.easyTotal || 895,
          mediumSolved: data.mediumSolved || 0,
          mediumTotal: data.mediumTotal || 1911,
          hardSolved: data.hardSolved || 0,
          hardTotal: data.hardTotal || 865,
          acceptanceRate: data.acceptanceRate || 0,
          ranking: data.ranking || 0,
          contributionPoints: data.contributionPoints || 0,
          streak: data.streak || 0,
          maxStreak: data.maxStreak || 0,
          totalActiveDays: data.totalActiveDays || 0,
          submissionsInLastYear: data.submissionsInLastYear || 0,
          recentSubmissions: data.recentSubmissions || [],
          languages: data.languages || [],
          badges: data.badges || 0,
        }
      } catch (error) {
        console.error("Error fetching LeetCode data:", error)
        // Return current stats if API fails
        return stats
      }
    },
    [stats],
  )


  const refreshStats = useCallback(async () => {
    setIsRefreshing(true)

    try {
      // Fetch live data from LeetCode API
      const newStats = await fetchLeetCodeData(stats.username)

      setStats(newStats)
      setLastUpdated(new Date())
      localStorage.setItem("leetcode-last-update", new Date().toISOString())
      localStorage.setItem("leetcode-stats", JSON.stringify(newStats))
    } catch (error) {
      console.error("Failed to refresh LeetCode stats:", error)
    } finally {
      setIsRefreshing(false)
    }
  }, [stats.username, fetchLeetCodeData])

  // Auto-refresh daily
  useEffect(() => {
    const checkDailyUpdate = async () => {
      const now = new Date()
      const lastUpdate = new Date(localStorage.getItem("leetcode-last-update") || now.toISOString())
      const timeDiff = now.getTime() - lastUpdate.getTime()
      const daysDiff = timeDiff / (1000 * 3600 * 24)

      if (daysDiff >= 1) {
        await refreshStats()
      }
    }

    checkDailyUpdate()
    // Check every hour for daily update
    const interval = setInterval(checkDailyUpdate, 3600000)
    return () => clearInterval(interval)
  }, [refreshStats])

  // Load cached data on component mount
  useEffect(() => {
    const cachedStats = localStorage.getItem("leetcode-stats")
    const cachedUpdate = localStorage.getItem("leetcode-last-update")

    if (cachedStats) {
      setStats(JSON.parse(cachedStats))
    }

    if (cachedUpdate) {
      setLastUpdated(new Date(cachedUpdate))
    }
  }, [])

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "Easy":
        return "text-green-600 bg-green-100 dark:bg-green-900/20"
      case "Medium":
        return "text-orange-600 bg-orange-100 dark:bg-orange-900/20"
      case "Hard":
        return "text-red-600 bg-red-100 dark:bg-red-900/20"
      default:
        return "text-gray-600 bg-gray-100 dark:bg-gray-900/20"
    }
  }

  const progressPercentage = (stats.totalSolved / stats.totalQuestions) * 100

  return (
    <section id="leetcode" className="py-20 relative bg-background/50">
      <div className="container px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            LeetCode{" "}
            <span className="bg-gradient-to-r from-orange-500 to-red-600 bg-clip-text text-transparent">Journey</span>
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-orange-500 to-red-600 mx-auto mb-8"></div>
          <p className="text-lg text-muted-foreground mb-6">
            My coding progress and problem-solving journey on LeetCode platform.
          </p>

          {/* Refresh Button */}
          <div className="flex items-center justify-center gap-4 mb-8">
            <Button
              onClick={refreshStats}
              disabled={isRefreshing}
              className="bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700"
            >
              <RefreshCw className={`mr-2 h-4 w-4 ${isRefreshing ? "animate-spin" : ""}`} />
              {isRefreshing ? "Fetching Live Data..." : "Refresh Stats"}
            </Button>
            <p className="text-sm text-muted-foreground">Last updated: {lastUpdated.toLocaleDateString()}</p>
          </div>
        </motion.div>

        {/* Main Stats Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {/* Profile Overview */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-1"
          >
            <Card className="h-full border-none bg-gradient-to-br from-orange-500/10 to-red-600/10 backdrop-blur-sm">
              <CardHeader className="text-center">
                <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-to-r from-orange-500 to-red-600 flex items-center justify-center">
                  <User className="h-10 w-10 text-white" />
                </div>
                <CardTitle className="text-2xl">@{stats.username}</CardTitle>
                <p className="text-muted-foreground">LeetCode Profile</p>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="text-center">
                  <div className="text-3xl font-bold text-orange-600 mb-2">{stats.totalSolved}</div>
                  <p className="text-sm text-muted-foreground">Problems Solved</p>
                  <div className="w-full bg-muted rounded-full h-2 mt-2">
                    <div
                      className="h-full bg-gradient-to-r from-orange-500 to-red-600 rounded-full transition-all duration-1000"
                      style={{ width: `${Math.max(progressPercentage, 0.5)}%` }}
                    ></div>
                  </div>
                  <p className="text-xs text-muted-foreground mt-1">
                    {progressPercentage.toFixed(2)}% of {stats.totalQuestions} total
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-3 rounded-lg bg-background/50">
                    <Trophy className="h-5 w-5 mx-auto mb-1 text-yellow-600" />
                    <div className="font-semibold">~{(stats.ranking / 1000000).toFixed(1)}M</div>
                    <p className="text-xs text-muted-foreground">Ranking</p>
                  </div>
                  <div className="text-center p-3 rounded-lg bg-background/50">
                    <TrendingUp className="h-5 w-5 mx-auto mb-1 text-green-600" />
                    <div className="font-semibold">{stats.acceptanceRate}%</div>
                    <p className="text-xs text-muted-foreground">Acceptance</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Problem Breakdown */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-2"
          >
            <Card className="h-full border-none bg-background/50 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Target className="h-5 w-5 mr-2 text-orange-600" />
                  Problem Breakdown
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {/* Easy Problems */}
                  <div className="text-center">
                    <div className="relative w-24 h-24 mx-auto mb-4">
                      <svg className="w-24 h-24 transform -rotate-90" viewBox="0 0 36 36">
                        <path
                          d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          className="text-muted"
                        />
                        <path
                          d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeDasharray={`${(stats.easySolved / stats.easyTotal) * 100}, 100`}
                          className="text-green-600"
                        />
                      </svg>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className="text-lg font-bold text-green-600">{stats.easySolved}</span>
                      </div>
                    </div>
                    <h4 className="font-semibold text-green-600">Easy</h4>
                    <p className="text-sm text-muted-foreground">/ {stats.easyTotal} problems</p>
                  </div>

                  {/* Medium Problems */}
                  <div className="text-center">
                    <div className="relative w-24 h-24 mx-auto mb-4">
                      <svg className="w-24 h-24 transform -rotate-90" viewBox="0 0 36 36">
                        <path
                          d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          className="text-muted"
                        />
                        <path
                          d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeDasharray={`${(stats.mediumSolved / stats.mediumTotal) * 100}, 100`}
                          className="text-orange-600"
                        />
                      </svg>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className="text-lg font-bold text-orange-600">{stats.mediumSolved}</span>
                      </div>
                    </div>
                    <h4 className="font-semibold text-orange-600">Medium</h4>
                    <p className="text-sm text-muted-foreground">/ {stats.mediumTotal} problems</p>
                  </div>

                  {/* Hard Problems */}
                  <div className="text-center">
                    <div className="relative w-24 h-24 mx-auto mb-4">
                      <svg className="w-24 h-24 transform -rotate-90" viewBox="0 0 36 36">
                        <path
                          d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          className="text-muted"
                        />
                        <path
                          d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeDasharray={`${stats.hardSolved > 0 ? (stats.hardSolved / stats.hardTotal) * 100 : 0}, 100`}
                          className="text-red-600"
                        />
                      </svg>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className="text-lg font-bold text-red-600">{stats.hardSolved}</span>
                      </div>
                    </div>
                    <h4 className="font-semibold text-red-600">Hard</h4>
                    <p className="text-sm text-muted-foreground">/ {stats.hardTotal} problems</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Recent Activity & Languages */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Recent Submissions */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Card className="border-none bg-background/50 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Calendar className="h-5 w-5 mr-2 text-blue-600" />
                  Recent Submissions
                </CardTitle>
                <p className="text-sm text-muted-foreground">
                  {stats.submissionsInLastYear} submissions in the past year
                </p>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {stats.recentSubmissions.length > 0 ? (
                    stats.recentSubmissions.map((submission, index) => (
                      <div
                        key={index}
                        className="flex items-center justify-between p-3 rounded-lg bg-background/50 border border-border/50"
                      >
                        <div className="flex-1">
                          <h5 className="font-medium text-sm">{submission.title}</h5>
                          <p className="text-xs text-muted-foreground">{submission.timestamp}</p>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Badge variant="outline" className={getDifficultyColor(submission.difficulty)}>
                            {submission.difficulty}
                          </Badge>
                          {submission.status === "Accepted" && <CheckCircle className="h-4 w-4 text-green-600" />}
                        </div>
                      </div>
                    ))
                  ) : (
                    <p className="text-center text-muted-foreground py-4">No recent submissions</p>
                  )}
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Languages & Stats */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Card className="border-none bg-background/50 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Code2 className="h-5 w-5 mr-2 text-purple-600" />
                  Languages & Activity
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Languages */}
                <div>
                  <h5 className="font-semibold mb-3">Programming Languages</h5>
                  <div className="space-y-2">
                    {stats.languages.map((language, index) => (
                      <div key={index} className="flex items-center justify-between p-2 rounded-lg bg-background/50">
                        <span className="text-sm font-medium">{language.name}</span>
                        <span className="text-sm text-muted-foreground">{language.problemsSolved} problems</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Activity Stats */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-3 rounded-lg bg-background/50">
                    <div className="text-xl font-bold text-orange-600">{stats.maxStreak}</div>
                    <p className="text-sm text-muted-foreground">Max Streak</p>
                  </div>
                  <div className="text-center p-3 rounded-lg bg-background/50">
                    <div className="text-xl font-bold text-blue-600">{stats.totalActiveDays}</div>
                    <p className="text-sm text-muted-foreground">Active Days</p>
                  </div>
                </div>

                {/* Badges */}
                <div className="text-center p-4 rounded-lg bg-gradient-to-r from-yellow-500/10 to-orange-500/10">
                  <div className="text-2xl font-bold text-yellow-600 mb-1">{stats.badges}</div>
                  <p className="text-sm text-muted-foreground">Badges Earned</p>
                  {stats.badges === 0 && (
                    <p className="text-xs text-muted-foreground mt-1">Keep solving to earn badges!</p>
                  )}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
