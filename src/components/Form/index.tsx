import { createSearchParams, useNavigate } from "react-router-dom";

const Form = () => {

    const navigate = useNavigate();
    const params = { sort: 'date', order: 'newest' };

    const goToPosts = () =>
        navigate({
            pathname: '/posts',
            search: `?${createSearchParams(params)}`,
        });

    return (
        <div>
            Users
            <button onClick={goToPosts}>Go to Posts</button>
        </div>
    );
};
export default Form