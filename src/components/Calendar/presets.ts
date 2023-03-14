export interface Preset {
  title: string;
  key: string;
  type: string;
  preset: () => [Date, Date] | Date;
}

import {
  endOfMonth,
  endOfWeek,
  endOfYear,
  set,
  startOfMonth,
  startOfWeek,
  startOfYear,
  subDays,
  subYears,
} from 'date-fns';

// export const perspectiveDatePresets = [
// ];

export default [
  {
    title: 'Today',
    key: 'perspective_today',
    type: 'perspective',
    preset: () => {
      const date = set(new Date(), {
        hours: 0,
        minutes: 0,
        seconds: 0,
        milliseconds: 0,
      });
      return date;
    },
  },
  {
    title: 'Yesterday',
    key: 'perspective_yesterday',
    type: 'perspective',
    preset: () => {
      const date = subDays(new Date(), 1);
      return date;
    },
  },
  {
    title: '7 days ago',
    key: 'perspective_7_days_ago',
    type: 'perspective',
    preset: () => {
      const date = subDays(new Date(), 7);
      return date;
    },
  },
  {
    title: 'Start of week',
    key: 'perspective_start_of_week',
    type: 'perspective',
    preset: () => {
      const date = startOfWeek(new Date());
      return date;
    },
  },
  {
    title: 'Start of month',
    key: 'perspective_start_of_month',
    type: 'perspective',
    preset: () => {
      const date = startOfMonth(new Date());
      return date;
    },
  },
  {
    title: 'Start of year',
    key: 'perspective_start_of_year',
    type: 'perspective',
    preset: () => {
      const date = startOfYear(new Date());
      return date;
    },
  },
  {
    title: 'Today',
    key: 'today',
    type: 'range',
    preset: () => {
      const today = set(new Date(), {
        hours: 0,
        minutes: 0,
        seconds: 0,
        milliseconds: 0,
      });
      return [
        today,
        set(new Date(today), {
          hours: 23,
          minutes: 59,
          seconds: 59,
        }),
      ];
    },
  },
  {
    title: 'Yesterday',
    key: 'yesterday',
    type: 'range',
    preset: () => {
      const yesterday = set(subDays(new Date(), 1), {
        hours: 0,
        minutes: 0,
        seconds: 0,
        milliseconds: 0,
      });
      return [
        yesterday,
        set(new Date(yesterday), {
          hours: 23,
          minutes: 59,
          seconds: 59,
        }),
      ];
    },
  },
  {
    title: 'Last week',
    key: 'last_week',
    type: 'range',
    preset: () => {
      const startDay = startOfWeek(subDays(new Date(), 7));
      return [startDay, endOfWeek(new Date(startDay))];
    },
  },
  {
    title: 'This month so far',
    key: 'this_month_so_far',
    type: 'range',
    preset: () => {
      const monthStart = startOfMonth(new Date());
      return [
        monthStart,
        set(new Date(), {
          hours: 23,
          minutes: 59,
          seconds: 59,
        }),
      ];
    },
  },
  {
    title: 'This month',
    key: 'this_moth',
    type: 'range',
    preset: () => {
      return [startOfMonth(new Date()), endOfMonth(new Date())];
    },
  },
  {
    title: 'Last month',
    key: 'last_month',
    type: 'range',
    preset: () => {
      const startDay = startOfMonth(subDays(startOfMonth(new Date()), 1));
      return [startDay, endOfMonth(startDay)];
    },
  },
  {
    title: 'This year so far',
    key: 'this_year_so_far',
    type: 'range',
    preset: () => {
      return [
        startOfYear(new Date()),
        set(new Date(), {
          hours: 23,
          minutes: 59,
          seconds: 59,
        }),
      ];
    },
  },
  {
    title: 'This year',
    key: 'this_year',
    type: 'range',
    preset: () => {
      return [startOfYear(new Date()), endOfYear(new Date())];
    },
  },
  {
    title: 'Last calendar year',
    key: 'last_calendar_year',
    type: 'range',
    preset: () => {
      const startDay = startOfYear(subDays(startOfYear(new Date()), 1));
      return [startDay, endOfYear(new Date(startDay))];
    },
  },
  {
    title: 'Past year',
    key: 'past_year',
    type: 'range',
    preset: () => {
      const now = new Date();
      const startDay = subYears(now, 1);
      return [startDay, now];
    },
  },
] as Array<Preset>;
