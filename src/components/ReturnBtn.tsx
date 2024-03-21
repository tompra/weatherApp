type Props = {
    toggleSearchBtn: () => void;
};

const ReturnBtn: React.FC<Props> = ({ toggleSearchBtn }): JSX.Element => {
    return (
        <button
            className='mt-4 rounded-md border-2 border-zinc-100 hover:border-zinc-500 hover:text-zinc-500 text-zinc-100 px-2 py-1 cursor-pointer capitalize'
            onClick={toggleSearchBtn}
        >
            Go back
        </button>
    );
};
export default ReturnBtn;
