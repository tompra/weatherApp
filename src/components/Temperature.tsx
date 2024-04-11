type Props = {
    temp: number;
};

const Temperature: React.FC<Props> = ({ temp }): JSX.Element => {
    return (
        <span data-testid='temperature-component'>
            {Math.round(temp)}
            <sup>o</sup>C
        </span>
    );
};
export default Temperature;
