"use client"

import { useMemo, useState } from "react"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent } from "@/components/ui/card"

const categories = ["General", "EWS", "OBC-NCL", "SC", "ST", "PwD"] as const
const genders = ["Male", "Female"] as const

export function PercentilePredictorForm() {
  const [marks, setMarks] = useState<string>("")
  const [category, setCategory] = useState<(typeof categories)[number]>("General")
  const [gender, setGender] = useState<(typeof genders)[number]>("Male")
  const [showResult, setShowResult] = useState(false)

  const percentile = useMemo(() => {
    const m = Number(marks)
    if (Number.isNaN(m)) return null
    // Mock logic: simple piecewise mapping
    if (m > 250) return "99.8+"
    if (m > 220) return "99.5+"
    if (m > 190) return "99.0+"
    if (m > 160) return "98.0+"
    if (m > 130) return "96.0+"
    if (m > 100) return "93.0+"
    if (m > 70) return "88.0+"
    if (m > 40) return "75.0+"
    if (m > 20) return "60.0+"
    return "Below 60"
  }, [marks])

  function onPredict() {
    setShowResult(true)
  }

  return (
    <div className="grid gap-6">
      <div className="grid gap-4">
        <div className="grid gap-2">
          <Label htmlFor="marks">Marks (out of 300)</Label>
          <Input
            id="marks"
            type="number"
            min={0}
            max={300}
            inputMode="numeric"
            placeholder="e.g., 185"
            value={marks}
            onChange={(e) => setMarks(e.target.value)}
          />
        </div>

        <div className="grid gap-2">
          <Label>Category</Label>
          <Select value={category} onValueChange={(v) => setCategory(v as any)}>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Select category" />
            </SelectTrigger>
            <SelectContent>
              {categories.map((c) => (
                <SelectItem key={c} value={c}>
                  {c}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="grid gap-2">
          <Label>Gender</Label>
          <Select value={gender} onValueChange={(v) => setGender(v as any)}>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Select gender" />
            </SelectTrigger>
            <SelectContent>
              {genders.map((g) => (
                <SelectItem key={g} value={g}>
                  {g}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>

      <div>
        <Button onClick={onPredict}>Predict Percentile</Button>
      </div>

      {showResult && (
        <Card className="border-primary/30">
          <CardContent className="p-6">
            <div className="text-lg font-medium">
              Expected Percentile:{" "}
              <span className="rounded-md bg-primary/20 px-2 py-1 text-foreground">{percentile ?? "—"}</span>
            </div>
            <p className="mt-2 text-sm text-foreground/70">
              Percentile shown is based on mock data for demonstration purposes.
            </p>
            <div className="mt-3 text-sm text-foreground/60">
              Inputs considered: {category}, {gender}, Marks: {marks || "—"}
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  )
}
