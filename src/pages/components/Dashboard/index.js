import React, { useState, useMemo, useEffect } from 'react';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';
import {
  format,
  subDays,
  addDays,
  setHours,
  setMinutes,
  setSeconds,
  setMilliseconds,
  isBefore,
  isEqual,
  parseISO,
} from 'date-fns';
import pt from 'date-fns/locale/pt';
import { utcToZonedTime } from 'date-fns-tz';

import { Container, Time } from './styles';

import api from '../../../services/api';

const range = [8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

export default function Dashboard() {
  const [schedule, setSchedule] = useState([]);
  const [date, setDate] = useState(new Date());

  const dateFormatted = useMemo(
    () => format(date, "dd 'de' MMMM", { locale: pt }),
    [date]
  );

  useEffect(() => {
    async function loadSchedule() {
      try {
        const response = await api.get('/schedule', {
          params: { date },
        });

        const { timeZone } = Intl.DateTimeFormat().resolvedOptions();

        const data = range.map((hour) => {
          const auxDate = setMilliseconds(
            setSeconds(setMinutes(setHours(date, hour), 0), 0),
            0
          );
          const compareDate = utcToZonedTime(auxDate, timeZone);

          return {
            time: `${hour}:00h`,
            past: isBefore(compareDate, new Date()),
            appointment: response.data.find((a) =>
              isEqual(parseISO(a.date), compareDate)
            ),
          };
        });

        setSchedule(data);
      } catch (err) {}
    }

    loadSchedule();
  }, [date]);

  function handlePrevDay() {
    setDate(subDays(date, 1));
  }

  function handleNextDay() {
    setDate(addDays(date, 1));
  }

  return (
    <Container>
      <header>
        <button type="button" onClick={handlePrevDay}>
          <MdChevronLeft size={36} color="#fff" />
        </button>
        <strong>{dateFormatted}</strong>
        <button type="button" onClick={handleNextDay}>
          <MdChevronRight size={36} color="#fff" />
        </button>
      </header>

      <ul>
        {schedule.map((each) => (
          <Time key={each.time} past={each.past} available={!each.appointment}>
            <strong>{each.time}</strong>
            <span>
              {each.appointment ? each.appointment.user.name : 'Em aberto'}
            </span>
          </Time>
        ))}
      </ul>
    </Container>
  );
}
