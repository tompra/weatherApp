type Props = {
    temp: number;
};

const Temperature: React.FC<Props> = ({ temp }): JSX.Element => {
    return (
        <span>
            {Math.round(temp)}
            <sup>o</sup>
        </span>
    );
};
export default Temperature;
