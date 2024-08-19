import p1_img from './p_1.jpeg';
import p2_img from './p_2.jpeg';
import p3_img from './p_3.jpeg';
import p4_img from './p_4.jpeg';
import p_5 from './p_5.jpeg';
import p_6 from './p_6.jpeg';
import p_7 from './p_7.jpeg';
import p_8 from './p_8.jpeg';
import p_9 from './p_9.jpeg';
import p_10 from './p_10.jpeg';
import p_11 from './p_11.jpeg';
import p_34 from './p_34.jpeg';
import p_121 from './p_12.jpeg';
import p_13 from './p_13.jpeg';
import p_14 from './p_14.jpeg';
import p_15 from './p_15.jpeg';
import p_16 from './p_16.jpeg';
import p_17 from './p_17.jpeg';
import p_18 from './p_18.jpeg';
import p_19 from './p_19.jpeg';
import p_20 from './p_20.jpeg';
import p_21 from './p_21.jpeg';
import p_22 from './p_22.jpeg';
import p_23 from './p_23.jpeg';
import p_24 from './p_24.jpeg';
import p_25 from './p_25.jpeg';
import p_26 from './p_26.jpeg';
import p_27 from './p_27.jpeg';
import p_28 from './p_28.jpg';
import p_29 from './p_29.jpeg';
import p_30 from './p_30.jpeg';
import p_31 from './p_31.webp';
import p_32 from './p_32.jpeg';
import p_33 from './p_33.jpeg';


let all_product = [
    {
      id: 1,
      name: "Black Oversized Puffer Jacket With Button Pockets",
      category: "women",
      image: p1_img,
      new_price: 50.0,
      old_price: 80.5,
    },

    {
        id:2,
        name:"Flutter Sleeve Overlap Collar",
        category:"women",
        image:p2_img,
        new_price:43.75,
        old_price:60.00,
    },

    {
        id:3,
        name:"Shirt",
        category:"women",
        image:p3_img,
        new_price:23.25,
        old_price:40.25,
    },

    {
        id:4,
        name:"Pakra Jacket Coat",
        category:"women",
        image:p4_img,
        new_price:120.25,
        old_price:200.25

    },

    {
        id:5,
        name:"Women Dress",
        category:"women",
        image:p_5,
        new_price:50.00,
        old_price:80.50,
    },

    {
        id:6,
        name:"Leather Jacket For Kids",
        category:"kids",
        image:p_6,
        new_price:43.75,
        old_price:60.00,
    },

    {
        id:7,
        name:"Blue Pants",
        category:"men",
        image:p_7,
        new_price:23.25,
        old_price:40.25,
    },

    {
        id:8,
        name:"Black Jacket",
        category:"men",
        image:p_8,
        new_price:120.25,
        old_price:200.25
    },

    {
        id:9,
        name:"Jacket",
        category:"women",
        image:p_9,
        new_price:120.25,
        old_price:200.25
    },

    {
        id:10,
        name:"Shirt",
        category:"kids",
        image:p_10,
        new_price:31.25,
        old_price:50.25,
    },

    {
        id:11,
        name:"Shirts",
        category:"kids",
        image:p_11,
        new_price:27.25,
        old_price:40.25,
    },

    {
        id:12,
        name:"Leather Jacket",
        category:"men",
        image:p_34,
        new_price:43.25,
        old_price:70.25,
    },

    {
        id:34,
        name:"Kids Shirt",
        category:"kids",
        image:p_121,
        new_price:23.25,
        old_price:40.25,
    },

    {
        id:13,
        name:"Kids Shirt",
        category:"kids",
        image:p_13,
        new_price:23.25,
        old_price:40.25,
    },

    {
        id:14,
        name:"Frock",
        category:"kids",
        image:p_14,
        new_price:43.25,
        old_price:70.25,
    },

    {
        id:15,
        name:"Shirt",
        category:"men",
        image:p_15,
        new_price:53.25,
        old_price:70.25,
    },

    {
        id:16,
        name:"Jacket",
        category:"women",
        image:p_16,
        new_price:63.25,
        old_price:100.25,
    },

    {
        id:17,
        name:"Pants",
        category:"men",
        image:p_17,
        new_price:53.25,
        old_price:70.25,
    },

    {
        id:18,
        name:"Shirt",
        category:"men",
        image:p_18,
        new_price:23.25,
        old_price:40.00,
    },

    {
        id:19,
        name:"Shirt",
        category:"kids",
        image:p_19,
        new_price:13.25,
        old_price:20.75,
    },

    {
        id:20,
        name:"Shirt",
        category:"women",
        image:p_20,
        new_price:23.25,
        old_price:40.75,
    },

    {
        id:21,
        name:"Shirt",
        category:"women",
        image:p_21,
        new_price:13.75,
        old_price:20.25,
    },

    {
        id:22,
        name:"Shirt",
        category:"women",
        image:p_22,
        new_price:53.75,
        old_price:80.25,
    },

    {
        id:23,
        name:"Jacket",
        category:"kids",
        image:p_23,
        new_price:73.75,
        old_price:85.75,
    },

    {
        id:24,
        name:"Jacket",
        category:"kids",
        image:p_24,
        new_price:55.25,
        old_price:70.25,
    },

    {
        id:25,
        name:"Jeans",
        category:"women",
        image:p_25,
        new_price:15.25,
        old_price:30.25,
    },

    {
        id:26,
        name:"Sweater",
        category:"women",
        image:p_26,
        new_price:45.25,
        old_price:70.25,
    },

    {
        id:27,
        name:"Shirt",
        category:"men",
        image:p_27,
        new_price:25.25,
        old_price:40.25,
    },

    {
        id:28,
        name:"Shirt",
        category:"men",
        image:p_28,
        new_price:15.25,
        old_price:30.25,
    },

    {
        id:29,
        name:"Pants",
        category:"men",
        image:p_29,
        new_price:15.25,
        old_price:30.25,
    },

    {
        id:30,
        name:"Shirt",
        category:"men",
        image:p_30,
        new_price:15.25,
        old_price:30.25,
    },

    {
        id:31,
        name:"Dress",
        category:"women",
        image:p_31,
        new_price:55.25,
        old_price:70.25,
    },

    {
        id:32,
        name:"Dress",
        category:"women",
        image:p_32,
        new_price:95.00,
        old_price:130.25,
    },

    {
        id:33,
        name:"Shirt",
        category:"kids",
        image:p_33,
        new_price:15.25,
        old_price:30.25,
    },
];

export default all_product;