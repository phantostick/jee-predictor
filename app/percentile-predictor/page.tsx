import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { PercentilePredictorForm } from "@/components/percentile-predictor-form"

export default function PercentilePredictorPage() {
  return (
    <main className="mx-auto max-w-4xl px-4 py-8 md:py-10">
      <Card>
        <CardHeader>
          <CardTitle className="text-pretty">JEE Percentile Predictor</CardTitle>
          <CardDescription className="text-foreground/70">
            Enter your details and see your expected percentile instantly.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <PercentilePredictorForm />
        </CardContent>
      </Card>
    </main>
  )
}
