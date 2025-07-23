import { Collapse } from "react-collapse";

export default function FaqCollapse({ collapsed, handler, index, data }) {
  return (
    <>
      <h4
        onClick={() => handler(index)}
        className={`accordion-title ${collapsed === index ? "open" : ""}`}
      >
        {data.title}
      </h4>
      <Collapse isOpened={collapsed === index}>
        <div className="accordion-content">
          <p>{data.description}</p>
        </div>
      </Collapse>
    </>
  );
}
