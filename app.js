
$(function(){

    var $posts = $('#posts');

    $.ajax({
        type: 'GET',
        url: 'https://jsonplaceholder.typicode.com/posts/',

        success: function(posts){

            console.log('success', posts);

            var i = 0;

            $.each(posts, function(i, posts){
                let likes = Math.floor((Math.random() * 100));
                $posts.append('<li style="display: flex; flex-direction: column">'+"<p>"+ posts.userId+"</p>"+"<p>"+ posts.id+"</p>" + "<h4>" + posts.title + " </h4>" + "<p>"+ posts.body+"</p>"  + '<p>' + ' Likes: ' + likes + '</p>' + '<button class="like">Like</button>' + '</li>');

            });

            $( ".like" ).click(function() {
                alert( "Liked" );
                document.getElementById('items').innerHTML = ++i;

            });

        }


    });
});
