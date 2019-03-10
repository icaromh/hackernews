# Hacker News Server

### Routes
|METHOD|ROUTE|DESCRIPTION|
|--|--|--|
|`GET`|`/connect/github`|call Github oauth page|
|`GET`|`/authenticate`|callback for authentication|
|`GET`|`/stories/:page`|List 20 stories per page. `page` it's optional|
|`GET`|`/commments/:id`|Get children comments for given ID, this ID can be of type `story` or `comment`|


#### Running Tests

For some reason the tests doesn't load on my machine, so they are beeing tested inside docker.

Ps.: Jest is not working at all, on every project I've.