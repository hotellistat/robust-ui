export interface QuickActionPreset {
  title: string,
  preset: () => [Date, Date]
}

import { endOfMonth, endOfWeek, endOfYear, set, startOfMonth, startOfWeek, startOfYear, subDays } from "date-fns"

export default [
  {
    title: "today",
    preset: () => {
      const today = set(new Date(), {
        hours: 0,
        minutes: 0,
        seconds: 0,
        milliseconds: 0,
      })
      return [
        today,
        set(new Date(today), {
          hours: 23,
          minutes: 59,
          seconds: 59,
        }),
      ]
    }
  },
  {
    title: "yesterday",
    preset: () => {
      const yesterday = set(subDays(new Date(), 1), {
        hours: 0,
        minutes: 0,
        seconds: 0,
        milliseconds: 0,
      })
      return [
        yesterday,
        set(new Date(yesterday), {
          hours: 23,
          minutes: 59,
          seconds: 59,
        }),
      ]
    }
  },
  {
    title: "this_month_so_far",
    preset: () => {
      const monthStart = startOfMonth(new Date())
      return [
        monthStart,
        set(new Date(), {
          hours: 23,
          minutes: 59,
          seconds: 59,
        }),
      ]
    }
  },
  {
    title: "this_month",
    preset: () => {
      return [startOfMonth(new Date()), endOfMonth(new Date())]
    }
  },
  {
    title: "this_year",
    preset: () => {
      return [startOfYear(new Date()), endOfYear(new Date())]
    }
  },
  {
    title: "this_year_so_far",
    preset: () => {
      return [
        startOfYear(new Date()),
        set(new Date(), {
          hours: 23,
          minutes: 59,
          seconds: 59,
        })]
    }
  },
  {
    title: "last_week",
    preset: () => {
      let startDay = startOfWeek(subDays(new Date(), 7))
      return [startDay, endOfWeek(new Date(startDay))
      ]
    }
  },
  {
    title: "last_month",
    preset: () => {
      let startDay = startOfMonth(subDays(startOfMonth(new Date()), 1))
      return [startDay, endOfMonth(startDay)
      ]
    }
  },
  {
    title: "last_year",
    preset: () => {
      const startDay = startOfYear(subDays(startOfYear(new Date()), 1))
      return [startDay, endOfYear(new Date(startDay))]
    }
  }
] as Array<QuickActionPreset>