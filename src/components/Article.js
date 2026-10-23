import './Article.css'
import Card from './Card.js';

function Article(params){
    return(
        <div className='article'>
            {
                Object.keys(params.db).map(
                    elem =>
                    {
                        return(
                            <Card human={params.db[elem]}/>
                        );
                    }
                )
            }
        </div>
    );
}

export default Article;