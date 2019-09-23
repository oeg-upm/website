<template>
    <div class="container" >
        <h1 class="mt-5">News</h1>
        <div  v-for="element in elements" :key="element.id" class="mt-5 ">
            <b-card no-body class="overflow-hidden" border-variant="light">
                <b-row no-gutters>
                <b-col md="4">
                    <b-card-img :src="element.img" class="mr-5" style="border-radius:6px"></b-card-img>
                </b-col>
                <b-col md="8">
                    <b-card-body>
                    <b-card-title>
                        <b-link>{{element.title}}</b-link>
                    </b-card-title>
                    <b-card-sub-title>
                        {{element.date}}
                    </b-card-sub-title>
                    <b-card-text>
                        {{element.preview}}
                    </b-card-text>
                    </b-card-body>
                    <b-card-footer class="h-100" border-variant="light" >
                        Writed by {{element.author}}
                    </b-card-footer>
                </b-col>
                </b-row>
            </b-card>
        </div>
        <div class="row mt-5">
            <div class="col-12 text-center">
                <b-button variant="outline-primary">Read More</b-button>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name:'newscomponent',
    data(){
        return{ elements:[]}
    },
    mounted(){
        this.elements = [
            {
                title:'Title of the New',
                author:'Jon Snow',
                date:'14/3/1969',
                img:'https://picsum.photos/300/200',
                preview:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ',
                id:'1110'
            },
            {
                title:'Title of the New',
                author:'Someone',
                date:'14/3/1969',
                img:'https://picsum.photos/300/200',
                preview:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ',
                id:'1111'
            },
            {
                title:'Title of the New',
                author:'You',
                date:'14/3/1969',
                img:'https://picsum.photos/300/200',
                preview:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ',
                id:'1112'
            }

        ]
    }
}
</script>