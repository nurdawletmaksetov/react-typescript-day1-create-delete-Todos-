type Props = {
    children: string;
    create?: () => void;
};

const Button = ({ children, create }: Props) => {
    return <button onClick={create}>{children}</button>
}

export default Button