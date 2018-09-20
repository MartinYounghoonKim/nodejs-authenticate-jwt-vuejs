<template>
    <div>
        <table class="table b-table table-striped table-hover">
            <colgroup>
                <col width="25%"/>
                <col width="25%"/>
                <col/>
                <col/>
            </colgroup>
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
                    <td>{{ item.regdate | moment('YYYY-MM-DD hh:mm:ss')}}</td>
                    <td>{{ item.user }}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
    import axios from 'axios'
    import jsCookie from 'js-cookie';

    export default {
        name: 'Home',

        created () {
            axios.defaults.headers.common['x-access-token'] = jsCookie.get('accessToken');
            axios.defaults.headers.common['x-refresh-token'] = jsCookie.get('refreshToken');

            axios.get('http://localhost:3000/board')
            .then(res => {
                this.items = res.data.data;
            })
            .catch(err => {
                axios.get('http://localhost:3000/auth/reissuance')
                    .then(res => {
                        jsCookie.set('accessToken', res.data.data.accessToken);
                        axios.defaults.headers.common['x-access-token'] = res.data.data.accessToken;
                        axios.get(err.response.config.url)
                            .then(res => {
                                console.log(res.data)
                                this.items = res.data.data;
                            })
                    })

            })
        },
        data () {
            return {
                items: [],
                cookieData : ''
            }
        }
    }
</script>
<style>

</style>
