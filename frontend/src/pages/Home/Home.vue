<template>
    <div>
        <table class="table b-table table-striped table-hover">
            <thead>
                <tr>
                    <th>번호</th>
                    <th>제목</th>
                    <th>작성일</th>
                    <th>작성자</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="item in items">
                    <td>{{ item.index }}</td>
                    <td>{{ item.title }}</td>
                    <td>{{ item.regdate }}</td>
                    <td>{{ item.user }}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
    import axios from 'axios';
    import cookieJs from 'js-cookie';

    function fetchBoardItems () {
        return new Promise((resolve, reject) => {
            axios.get('http://localhost:3000/board')
                .then(res => {
                    resolve(res.data.data);
                })
                .catch(reissueAccessToken)
        })
    }
    function reissueAccessToken (err) {
        return new Promise(resolve => {
            const previos = err.response.config.url;

            if (err.response.status === 401) {
                axios.get('http://localhost:3000/auth/reissuance')
                    .then(res => {
                        cookieJs.set('accessToken', res.data.data.accessToken);
                        axios.defaults.headers.common['x-access-token'] = cookieJs.get('accessToken');
                        axios.get(previos)
                            .then(res => {
                                console.log(res);
                            });
                    });
            }
        })
    }
    export default {
        name: 'Home',
        created () {
            axios.defaults.headers.common['x-access-token'] = cookieJs.get('accessToken');
            axios.defaults.headers.common['x-refresh-token'] = cookieJs.get('refreshToken');
            fetchBoardItems()
                .then(items => {
                    this.items = items;
                })
        },
        data () {
            return {
                items: [
                    {
                        index: 1,
                        title: '게시글 제목',
                        regDate: '2017-01-31',
                        writer: '홍길동',
                    },
                    {
                        index: 2,
                        title: '게시글 제목',
                        regDate: '2017-01-31',
                        writer: '홍길동',
                    },
                    {
                        index: 3,
                        title: '게시글 제목',
                        regDate: '2017-01-31',
                        writer: '홍길동',
                    },
                    {
                        index: 4,
                        title: '게시글 제목',
                        regDate: '2017-01-31',
                        writer: '홍길동',
                    }
                ]
            }
        },
        methods: {
            reissueToken (err) {
                const previos = err.response.config.url;
                if (err.response.status === 401) {
                    axios.get('http://localhost:3000/auth/reissuance')
                        .then(res => {
                            cookieJs.set('accessToken', res.data.data.accessToken);
                            axios.defaults.headers.common['x-access-token'] = cookieJs.get('accessToken');
                            axios.get('http://localhost:3000/board')
                                .then(res => {
                                    console.log(res);
                                });
                        });
                }
            },
        }
    }
</script>

<style>

</style>
