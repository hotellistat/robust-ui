export interface Preset {
  title: string;
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

export const perspectiveDatePresets = [
  {
    title: 'Today',
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
    preset: () => {
      const date = subDays(new Date(), 1);
      return date;
    },
  },
  {
    title: '7 days ago',
    preset: () => {
      const date = subDays(new Date(), 7);
      return date;
    },
  },
  {
    title: 'Start of week',
    preset: () => {
      const date = startOfWeek(new Date());
      return date;
    },
  },
  {
    title: 'Start of month',
    preset: () => {
      const date = startOfMonth(new Date());
      return date;
    },
  },
  {
    title: 'Start of year',
    preset: () => {
      const date = startOfYear(new Date());
      return date;
    },
  },
];

export default [
  {
    title: 'Today',
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
    preset: () => {
      const startDay = startOfWeek(subDays(new Date(), 7));
      return [startDay, endOfWeek(new Date(startDay))];
    },
  },
  {
    title: 'This month so far',
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
    preset: () => {
      return [startOfMonth(new Date()), endOfMonth(new Date())];
    },
  },
  {
    title: 'Last month',
    preset: () => {
      const startDay = startOfMonth(subDays(startOfMonth(new Date()), 1));
      return [startDay, endOfMonth(startDay)];
    },
  },
  {
    title: 'This year so far',
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
    preset: () => {
      return [startOfYear(new Date()), endOfYear(new Date())];
    },
  },
  {
    title: 'Last calendar year',
    preset: () => {
      const startDay = startOfYear(subDays(startOfYear(new Date()), 1));
      return [startDay, endOfYear(new Date(startDay))];
    },
  },
  {
    title: 'Past year',
    preset: () => {
      const now = new Date();
      const startDay = subYears(now, 1);
      return [startDay, now];
    },
  },
] as Array<Preset>;
