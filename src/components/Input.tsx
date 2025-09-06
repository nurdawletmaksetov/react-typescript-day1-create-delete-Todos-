type Props = {
    value: string;
    setValue: (value: string) => void;
}

const Input = ({ value, setValue }: Props) => {
    return (
        <div style={{ display: 'flex', gap: '10px' }}>
            <input
                value={value}
                onChange={(e) => setValue(e.target.value)}
            />
        </div>
    )
}

export default Input;