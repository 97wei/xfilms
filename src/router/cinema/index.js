export default{
    path :'/cinema',
    component:()=>import('../../views/Cinema/index.vue'),
    children:[
        {path:'whole_city',
            component:()=>import('../../components/cinema_item/whole_city')
        },
        {path:'brand',
        component:()=>import('../../components/cinema_item/brand')
        },
         {path:'feature',
         component:()=>import('../../components/cinema_item/feature')
        },      
        ]
}