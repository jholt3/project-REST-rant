const React = require('react')
const Def = require('../default')

function index (data) {
    let postsFormatted = data.posts.map((post) => {
        return (
        <div className='col-sm-6'>
            <h2 className='text-center'>
                <a href={`/posts/${post.id}`}>
                    {post.title}
                </a>
                </h2>
            <p className='text-center'>
                {post.post}
            </p>
            <img src={post.pic} class="mx-auto d-block" alt={post.name} />

            <h4>{post.user}</h4>

        </div>
        ) 
    })
    return (
        <Def>
            <main>
                <h1>POST-It</h1>
                <div className='row'>
                {postsFormatted}
                </div>
            </main>
        </Def>
    )
}

module.exports = index