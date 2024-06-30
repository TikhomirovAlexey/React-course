import { Link } from 'react-router-dom';

function NotFoundPage() {
    return (
        <div>
            <h1>404</h1>
            <p>Страница отсутствует!</p>
            <Link to={`/`}>Главная</Link>
        </div>
    );
}

export default NotFoundPage;