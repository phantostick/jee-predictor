"use client"

import { useMemo, useState } from "react"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent } from "@/components/ui/card"
import { InputOTP, InputOTPGroup, InputOTPSlot } from "@/components/ui/input-otp"

const categories = ["General", "EWS", "OBC-NCL", "SC", "ST", "PwD"] as const
const genders = ["Male", "Female"] as const

type Step = "form" | "otp" | "results"

export function CollegePredictorForm() {
  const [percentile, setPercentile] = useState<string>("")
  const [state, setState] = useState<string>("")
  const [category, setCategory] = useState<(typeof categories)[number]>("General")
  const [gender, setGender] = useState<(typeof genders)[number]>("Male")
  const [phone, setPhone] = useState<string>("")
  const [step, setStep] = useState<Step>("form")
  const [otp, setOtp] = useState<string>("")

  const colleges = useMemo(() => {
    const p = Number(percentile)
    if (Number.isNaN(p)) return []
    // Mock buckets
    if (p >= 99) return ["IIIT Hyderabad", "NIT Trichy", "NIT Surathkal"]
    if (p >= 97) return ["NIT Warangal", "IIIT Allahabad", "State Engineering College"]
    if (p >= 94) return ["IIIT Pune", "NIT Jalandhar", "State Engineering College"]
    if (p >= 90) return ["IIIT Bhubaneswar", "State Engineering College", "Private Institute (Top Tier)"]
    if (p >= 80) return ["State Engineering College", "Private Institute"]
    return ["Private Institute", "Local Engineering College"]
  }, [percentile])

  function onSendOtp() {
    // mock: proceed to OTP step if phone looks semi-valid
    if (phone.trim().length >= 10) {
      setStep("otp")
    }
  }

  function onVerifyOtp() {
    // mock: accept OTP "123456"
    if (otp === "123456") setStep("results")
  }

  return (
    <div className="grid gap-6">
      {step === "form" && (
        <div className="grid gap-4">
          <div className="grid gap-2">
            <div className="grid gap-2">
              <Label htmlFor="percentile">Expected Percentile</Label>
              <Input
                id="percentile"
                type="number"
                min={0}
                max={100}
                step="0.01"
                inputMode="decimal"
                placeholder="e.g., 97.52"
                value={percentile}
                onChange={(e) => setPercentile(e.target.value)}
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="state">Home State</Label>
              <Input
                id="state"
                placeholder="e.g., Tamil Nadu"
                value={state}
                onChange={(e) => setState(e.target.value)}
              />
            </div>
          </div>

          <div className="grid gap-2">
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

            <div className="grid gap-2">
              <Label htmlFor="phone">Phone Number</Label>
              <Input
                id="phone"
                type="tel"
                inputMode="tel"
                placeholder="e.g., 9876543210"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>
          </div>

          <div>
            <Button onClick={onSendOtp}>Send OTP</Button>
            <p className="mt-2 text-sm text-foreground/70">
              A mock OTP will be sent. Use <span className="font-medium">123456</span> to verify.
            </p>
          </div>
        </div>
      )}

      {step === "otp" && (
        <div className="grid gap-4">
          <div className="grid gap-2">
            <Label>Enter OTP</Label>
            <InputOTP maxLength={6} value={otp} onChange={setOtp}>
              <InputOTPGroup>
                <InputOTPSlot index={0} />
                <InputOTPSlot index={1} />
                <InputOTPSlot index={2} />
                <InputOTPSlot index={3} />
                <InputOTPSlot index={4} />
                <InputOTPSlot index={5} />
              </InputOTPGroup>
            </InputOTP>
            <div>
              <Button onClick={onVerifyOtp}>Verify OTP</Button>
              <p className="mt-2 text-sm text-foreground/70">
                Hint: enter <span className="font-medium">123456</span> to continue.
              </p>
            </div>
          </div>
        </div>
      )}

      {step === "results" && (
        <Card className="border-primary/30">
          <CardContent className="p-6">
            <div className="text-lg font-medium">Possible Colleges</div>
            <p className="mt-1 text-sm text-foreground/70">Based on mock logic for demonstration purposes.</p>
            <ul className="mt-4 grid gap-3 md:grid-cols-2">
              {colleges.map((c) => (
                <li key={c} className="rounded-md border bg-accent/40 px-4 py-3">
                  <span className="text-foreground">{c}</span>
                </li>
              ))}
            </ul>
            <div className="mt-4 text-sm text-foreground/60">
              Inputs considered: Percentile {percentile || "—"}, State {state || "—"}, {category}, {gender}, Phone{" "}
              {phone || "—"}
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  )
}
