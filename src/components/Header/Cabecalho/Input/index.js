import "./style.css";
import { Search } from '@mui/icons-material';

export default function SearchInput() {

    const determineHeaderClass = (path1, path2) => {
        if (path1 === location.pathname || path2 === location.pathname) {
            return "hiddenHeader";
        } else {
            return "headerContainer";
        }
    }

    return (
        <div className={determineHeaderClass('/cadastrar', '/login')}>
            <div className="headerInputFieldContainer">
                <input className="headerInputField" placeholder="Buscar por um produto..." />
                <Search className="searchIcon" />
            </div>
        </div>
    );
}
