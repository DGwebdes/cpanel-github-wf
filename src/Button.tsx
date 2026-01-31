export default function Button({
    handleClick,
    count,
}: {
    handleClick: () => void;
    count: number;
}) {
    return <button onClick={handleClick}>{count}</button>;
}
