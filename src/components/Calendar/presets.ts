export interface Options {
  title: string;
  key: string;
  type: string;
  class?: string;
}

export interface Preset extends Options {
  eval: (range?: [Date, Date]) => [Date, Date] | Date;
}

export interface Filter extends Options {
  eval?: (range?: [Date, Date]) => [Date, Date] | Date;
  evalPerspective?: (range?: [Date, Date]) => Date;
  type: 'range' | 'filter' | 'disabled';
  disableEdit?: boolean;
  disablePreset?: boolean;
  disablePerspective?: boolean;
  disableCalendar?: boolean;
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
    eval: () => {
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
    eval: () => {
      const date = subDays(new Date(), 1);
      return date;
    },
  },
  {
    title: '7 days ago',
    key: 'perspective_7_days_ago',
    type: 'perspective',
    eval: () => {
      const date = subDays(new Date(), 7);
      return date;
    },
  },
  {
    title: 'Start of week',
    key: 'perspective_start_of_week',
    type: 'perspective',
    eval: () => {
      const date = startOfWeek(new Date(), {
        weekStartsOn: 1,
      });
      return date;
    },
  },
  {
    title: 'Start of month',
    key: 'perspective_start_of_month',
    type: 'perspective',
    eval: () => {
      const date = startOfMonth(new Date());
      return date;
    },
  },
  {
    title: 'Start of year',
    key: 'perspective_start_of_year',
    type: 'perspective',
    eval: () => {
      const date = startOfYear(new Date());
      return date;
    },
  },
  {
    title: 'Today',
    key: 'today',
    type: 'range',
    eval: () => {
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
    eval: () => {
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
    eval: () => {
      const startDay = startOfWeek(subDays(new Date(), 7), {
        weekStartsOn: 1,
      });
      return [
        startDay,
        endOfWeek(new Date(startDay), {
          weekStartsOn: 1,
        }),
      ];
    },
  },
  {
    title: 'This month so far',
    key: 'this_month_so_far',
    type: 'range',
    eval: () => {
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
    eval: () => {
      return [startOfMonth(new Date()), endOfMonth(new Date())];
    },
  },
  {
    title: 'Last month',
    key: 'last_month',
    type: 'range',
    eval: () => {
      const startDay = startOfMonth(subDays(startOfMonth(new Date()), 1));
      return [startDay, endOfMonth(startDay)];
    },
  },
  {
    title: 'This year so far',
    key: 'this_year_so_far',
    type: 'range',
    eval: () => {
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
    eval: () => {
      return [startOfYear(new Date()), endOfYear(new Date())];
    },
  },
  {
    title: 'Last calendar year',
    key: 'last_calendar_year',
    type: 'range',
    eval: () => {
      const startDay = startOfYear(subDays(startOfYear(new Date()), 1));
      return [startDay, endOfYear(new Date(startDay))];
    },
  },
  {
    title: 'Past year',
    key: 'past_year',
    type: 'range',
    eval: () => {
      const now = new Date();
      const startDay = subYears(now, 1);
      return [startDay, now];
    },
  },
] as Array<Preset>;
