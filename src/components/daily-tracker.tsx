"use client"

import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import type { Activity, DailyRecord } from "@/components/ramadhan-tracker"
import { Moon, Sunrise, Sun, Sunset, CloudMoon, Star, Coffee } from "lucide-react"

interface DailyTrackerProps {
  record: DailyRecord
  onUpdateActivity: (activity: Activity, completed: boolean) => void
}

const activities = [
  { id: "puasa" as Activity, label: "Fasting", icon: <Coffee className="h-5 w-5 text-orange-500" /> },
  { id: "shubuh" as Activity, label: "Shubuh Prayer", icon: <Sunrise className="h-5 w-5 text-amber-500" /> },
  { id: "dzuhr" as Activity, label: "Dzuhr Prayer", icon: <Sun className="h-5 w-5 text-yellow-500" /> },
  { id: "ashr" as Activity, label: "Ashr Prayer", icon: <Sunset className="h-5 w-5 text-orange-500" /> },
  { id: "maghrib" as Activity, label: "Maghrib Prayer", icon: <CloudMoon className="h-5 w-5 text-indigo-500" /> },
  { id: "isya" as Activity, label: "Isya Prayer", icon: <Moon className="h-5 w-5 text-blue-500" /> },
  { id: "tarawih" as Activity, label: "Tarawih Prayer", icon: <Star className="h-5 w-5 text-purple-500" /> },
]

export function DailyTracker({ record, onUpdateActivity }: DailyTrackerProps) {
  return (
    <div className="space-y-4">
      {activities.map((activity) => (
        <div
          key={activity.id}
          className="flex items-center space-x-4 p-2 rounded-lg hover:bg-muted/50 transition-colors"
        >
          <div className="flex-shrink-0">{activity.icon}</div>
          <div className="flex-grow">
            <Label htmlFor={activity.id} className="text-base font-medium">
              {activity.label}
            </Label>
          </div>
          <Checkbox
            id={activity.id}
            checked={record.activities[activity.id]}
            onCheckedChange={(checked) => {
              onUpdateActivity(activity.id, checked === true)
            }}
          />
        </div>
      ))}
    </div>
  )
}

