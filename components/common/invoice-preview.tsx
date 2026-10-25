const rows = [
  { name: "Sample item A", qty: 2, rate: 100, gst: 18 },
  { name: "Sample item B", qty: 1, rate: 250, gst: 12 },
]

const money = (value: number) => value.toFixed(2)

/** Illustration of a GST invoice with sample data. Not a screenshot of the app. */
export function InvoicePreview() {
  const subtotal = rows.reduce((sum, row) => sum + row.qty * row.rate, 0)
  const gst = rows.reduce((sum, row) => sum + (row.qty * row.rate * row.gst) / 100, 0)

  return (
    <div className="bg-card p-5 font-mono text-[11px] leading-6 md:text-xs">
      <div className="flex items-center justify-between border-b border-border pb-3">
        <span className="font-medium text-foreground">INV-0001</span>
        <span className="text-muted-foreground">sample invoice</span>
      </div>

      <div className="grid grid-cols-[1fr_auto_auto_auto] gap-x-4 border-b border-border py-3 text-muted-foreground">
        <span>item</span>
        <span className="text-right">qty</span>
        <span className="text-right">gst</span>
        <span className="text-right">amount</span>
        {rows.map((row) => (
          <div key={row.name} className="contents text-foreground">
            <span>{row.name}</span>
            <span className="text-right">{row.qty}</span>
            <span className="text-right">{row.gst}%</span>
            <span className="text-right">{money(row.qty * row.rate)}</span>
          </div>
        ))}
      </div>

      <dl className="space-y-0.5 pt-3">
        <div className="flex justify-between text-muted-foreground">
          <dt>subtotal</dt>
          <dd>{money(subtotal)}</dd>
        </div>
        <div className="flex justify-between text-muted-foreground">
          <dt>cgst</dt>
          <dd>{money(gst / 2)}</dd>
        </div>
        <div className="flex justify-between text-muted-foreground">
          <dt>sgst</dt>
          <dd>{money(gst / 2)}</dd>
        </div>
        <div className="flex justify-between border-t border-border pt-2 text-sm font-medium text-primary">
          <dt>total</dt>
          <dd>{money(subtotal + gst)}</dd>
        </div>
      </dl>

      <p className="mt-4 flex items-center gap-2 text-muted-foreground">
        <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-primary" />
        stock deducted &middot; logged as &quot;out&quot;
      </p>
    </div>
  )
}
