export interface Preset {
  title: string;
  preset: () => [Date, Date];
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
} from 'date-fns';

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
    title: 'Last year',
    preset: () => {
      const startDay = startOfYear(subDays(startOfYear(new Date()), 1));
      return [startDay, endOfYear(new Date(startDay))];
    },
  },
] as Array<Preset>;
