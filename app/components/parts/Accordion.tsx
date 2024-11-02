/** @jsxImportSource hono/jsx */

type AccordionProps = {
  title: string;
  children: any;
};

export function Accordion({ title, children }: AccordionProps) {
  return (
    <details class="accordion">
      <summary class="accordion-header">{title}</summary>
      <div class="accordion-content">{children}</div>
    </details>
  );
}
