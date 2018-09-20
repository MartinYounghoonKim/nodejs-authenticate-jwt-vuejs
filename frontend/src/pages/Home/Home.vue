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
                    <td>{{ item.regDate }}</td>
                    <td>{{ item.writer }}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
    import axios from 'axios'

    export default {
        name: 'Home',
        created () {
            axios.get('http://localhost:3000/board')
            .then(res => {
                console.log(res)
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
                ],
                cookieData : ''
            }
        }
    }
</script>
<style>

</style>
