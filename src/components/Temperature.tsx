type Props = {
    temp: number;
};

const Temperature: React.FC<Props> = ({ temp }): JSX.Element => {
    return (
        <span>
            {Math.round(temp)}
            <sup>o</sup>C
        </span>
    );
};
export default Temperature;
