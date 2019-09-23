<template>
    <div class="container" >
        <h1 class="mt-5">List of Projects</h1>
        <div class="row">
            <b-button class="col-sm-3 col-lg-2 ml-3" v-on:click="showAll()" variant="outline-primary">View All</b-button>
            <b-button class="col-sm-3 col-lg-2 ml-3" v-on:click="showCurrent()" variant="outline-primary">Current Projects</b-button>
            <b-button class="col-sm-3 col-lg-2 ml-3" v-on:click="showCompleted()" variant="outline-primary">Completed Projects</b-button>

        </div>
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
                        {{element.description}}
                    </b-card-text>
                    <hr>
                    <b-card-text>
                        Developed by {{element.team}}
                    </b-card-text>
                    </b-card-body>
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
    name:'projectscomponent',
    data(){
        return{
            elements:[],
            data:[],
            currentProjects:[],
            completedProjects:[]
        }
    },
    methods:{
        filter(){
            this.data.forEach((element) => {
                if(element.type == "completed")
                    this.completedProjects.push(element)
                else
                    this.currentProjects.push(element);
            });
        },
        showCompleted(){
            this.elements = this.completedProjects.slice();
        },
        showCurrent(){
            this.elements = this.currentProjects.slice();
        },
        showAll(){
            this.elements = this.data.slice();
        }
    },
    mounted(){
        this.data = [
            {
                title:'Example of current Project',
                description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. ',
                img:'https://picsum.photos/300/200',
                team:'Alice, Bob',
                id:'0',
                type:'current'
            },
            {
                title:'Example of completed Project',
                description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. ',
                img:'https://picsum.photos/300/200',
                team:'Alice, Bob',
                id:'1',
                type:'completed'
            },
            {
                title:'Example of completed Project',
                description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. ',
                img:'https://picsum.photos/300/200',
                team:'Alice, Bob',
                id:'2',
                type:'completed'
            },
            {
                title:'Example of current Project',
                description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. ',
                img:'https://picsum.photos/300/200',
                team:'Alice, Bob',
                id:'3',
                type:'current'
            },
            {
                title:'Example Completed Project',
                description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. ',
                img:'https://picsum.photos/300/200',
                team:'Alice, Bob',
                id:'4',
                type:'completed'
            },                                               
        ]
        this.filter()
        this.showAll()
    }
}
</script>

<style>

</style>