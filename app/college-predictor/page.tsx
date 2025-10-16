import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { CollegePredictorForm } from "@/components/college-predictor-form"

export default function CollegePredictorPage() {
  return (
    <main className="mx-auto max-w-4xl px-4 py-8 md:py-10">
      <Card>
        <CardHeader>
          <CardTitle className="text-pretty">College Predictor</CardTitle>
          <CardDescription className="text-foreground/70">
            Simulate OTP verification and view mock college options based on your expected percentile.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <CollegePredictorForm />
        </CardContent>
      </Card>
    </main>
  )
}
