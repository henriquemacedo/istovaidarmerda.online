import React from "react";
import PropTypes from "prop-types";
import Link from "next/link";
import styled from "styled-components";
import { device } from "utils/breakpoints";

const Wrapper = styled.section`
  padding: 30px;

  @media ${device.l} {
    padding: 100px;
  }
`;

const Events = styled.div`
  margin: 0 auto;
  max-width: 1440px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  grid-gap: 30px;
`;

const Event = styled.div`
  border-top: 15px solid var(--yellow);

  h3 {
    margin: 10px 0 -5px 0;
  }

  h4 {
    margin-bottom: 10px;
    font-size: 0.75rem;
    color: var(--lightBrown);
  }

  > span {
    display: block;
    line-height: 150%;

    &.area {
      font-style: italic;
    }

    &.title {
      font-weight: var(--fontBlack);
    }
  }

  > div {
    margin-top: 30px;

    a {
      color: var(--default);
      text-decoration: none;
    }
  }
`;

const Persona = styled.div`
  &:not(:last-child) {
    margin-bottom: 10px;
  }

  a {
    display: flex;

    div {
      display: flex;
      flex-direction: column;
      justify-content: center;

      &.avatar {
        margin-right: 5px;
        width: 50px;
        height: 50px;

        img {
          border-radius: 999px;
          object-fit: cover;
          overflow: hidden;
        }
      }
    }

    span {
      &.name {
        font-weight: var(--fontRegular);
      }

      &.job {
        font-size: 0.75rem;
        font-style: italic;
        color: var(--lightBrown);
      }
    }
  }
`;

const Personas = ({ values }) =>
  Array.isArray(values) &&
  values.map((persona, index) => {
    return (
      <Persona key={`persona-${index}`}>
        <Link href={persona.url} target="_blank">
          <a>
            <div className="avatar">
              <img src={persona.avatar} alt={persona.name} width={50} height={50} />
            </div>
            <div>
              <span className="name">{persona.name}</span>
              <span className="job">{persona.job}</span>
            </div>
          </a>
        </Link>
      </Persona>
    );
  });

const Schedule = ({ events }) => (
  <Wrapper id="schedule">
    <h2 className="sr-only">Agenda</h2>
    <Events>
      {Array.isArray(events) &&
        events.map((event, index) => {
          const key = `event-${index}`;
          return (
            <Event key={key}>
              <h3>{event.date}</h3>
              <span className="area">{event.area}</span>
              <span className="title">{event.title}</span>
              <div>
                <h4>Moderador</h4>
                <Personas values={event.moderator} />
                <h4 style={{ marginTop: "15px" }}>Painel</h4>
                <Personas values={event.speakers} />
              </div>
            </Event>
          );
        })}
    </Events>
  </Wrapper>
);

Schedule.propTypes = {
  events: PropTypes.arrayOf(
    PropTypes.shape({
      date: PropTypes.string,
      area: PropTypes.string,
      title: PropTypes.string,
      moderator: PropTypes.arrayOf(
        PropTypes.shape({
          avatar: PropTypes.string,
          name: PropTypes.string,
          job: PropTypes.string,
          url: PropTypes.string,
        }),
      ),
      speakers: PropTypes.arrayOf(
        PropTypes.shape({
          avatar: PropTypes.string,
          name: PropTypes.string,
          job: PropTypes.string,
          url: PropTypes.string,
        }),
      ),
    }),
  ).isRequired,
};

export default Schedule;