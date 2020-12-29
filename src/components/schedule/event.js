import React from "react";
import { string, number, arrayOf, shape, oneOf } from "prop-types";
import classNames from "classnames";
import { useInView } from "react-intersection-observer";
import Personas, { PERSONAS_VALUES } from "./personas";
import * as Styles from "./styles";
import "./types.d";

export const EVENT = {
  date: string,
  area: string,
  title: string.isRequired,
  moderator: arrayOf(shape(PERSONAS_VALUES)),
  speakers: arrayOf(shape(PERSONAS_VALUES)),
  index: number,
  type: oneOf(["agenda", "rubrics"]),
};

/**
 * @param {ISchedule} props
 * @returns {JSX.Element | null}
 */
const Event = ({ date, area, title, moderator, speakers, index, type }) => {
  const { ref, inView } = useInView({
    threshold: 0.125,
    triggerOnce: true,
  });

  const classes = classNames("schedule", {
    "is-visible": inView,
  });

  return (
    <Styles.Event
      ref={ref}
      className={classes}
      data-type={type}
      itemscope
      itemtype="https://schema.org/SocialEvent"
      style={{
        "--ivdm-event-delay": `${index}`,
      }}
    >
      {date && (
        <h3 className="event__heading" itemProp="startDate">
          {date}
        </h3>
      )}
      <div className="event__topic">
        {area && <span className="area">{area}</span>}
        <span className="title" itemProp="name">
          {title}
        </span>
      </div>
      {moderator && (
        <div className="event__section">
          {type === "agenda" && <h4 className="event__section__title">Moderator</h4>}
          <Personas values={moderator} />
        </div>
      )}
      {speakers && (
        <div className="event__section">
          {type === "agenda" && <h4 className="event__section__title">Painel</h4>}
          <Personas values={speakers} />
        </div>
      )}
    </Styles.Event>
  );
};

Event.defaultProps = {
  date: undefined,
  area: undefined,
  moderator: undefined,
  speakers: [],
  type: "agenda",
  index: 0,
};
Event.propTypes = EVENT;

export default Event;
