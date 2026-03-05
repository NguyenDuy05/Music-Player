export default function ProgressBar({ currentTime, duration, onChange }) {

    return (

        <input
            type="range"
            min="0"
            max={duration}
            value={currentTime}
            onChange={onChange}
        />

    )

}