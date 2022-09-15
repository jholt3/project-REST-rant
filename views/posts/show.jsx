const React = require('react')
const Def = require('../default')

function show (data) {
    
    return(
        <Def>
            <main>
                <div className='row'>
                    <div className='col-sm-6'>
                        <h1>{data.post.titile}</h1>
                        <img src={data.post.pic} alt={data.post.name}/>
                        <p> {data.post.post} </p>
                        <h3>{data.post.user}</h3>
                    </div>
                    <div className='col-sm-6'>
                 
                    <br />

                    <div className='buttons'>
               <ul>
                    <li>
                        <a href={`/posts/${data.post.id}/edit`} className='btn btn-warning'>Edit</a>
                    </li>
                    <li>
                        <form method='POST' action={`/posts/${data.post.id}?_method=DELETE`} >
                            <button type='submit' className='btn btn-danger'>Delete </button>
                        </form>
                    </li>
                </ul>
                </div>
                </div>
                </div>

               
    
                
            </main>
        </Def>
    )
}
    
        
   

module.exports = show