export default function EventStamp({ date }: { date: string }) {
  const [day, ...rest] = date.split(' ');
  return (
    <span className="event-stamp" aria-hidden="true">
      <span>COMPLETED</span>
      <strong>{day}</strong>
      <span>{rest.join(' ')}</span>
    </span>
  );
}
