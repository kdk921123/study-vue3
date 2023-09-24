<template>
    <!-- vue 디렉티브 : 접두사 v-       예) v-html v-model v-bind -->

    <!--문자열 데이터 바인딩 {{  }}-->
    <span>{{ stringData }}</span>
    <br>
    <br>

    <!-- raw(원시) HTML 데이터 바인딩       v-html  -->
    <div v-html="htmlData"></div>
    <br>
    <br>

    <!-----------------  Form 입력 데이터 바인딩   v-model / v-bind:value ------------------------>

    <!--  text 데이터 바인딩       v-modle -->
    <input type="text" v-model="inputText" />
    <br>
    <br>
    <!--  number 데이터 바인딩      v-modle.number -->
    <input type="number" v-model.number="inputNumber" />
    <br>
    <br>
    <!-- textarea 데이터 바인딩-->
    <textarea v-model="inputTextArea"></textarea>
    <br>
    <br>
    <!-- select 데이터 바인딩-->
    <select v-model="inputSelect">
        <option value="01">select01</option>
        <option value="02">select02</option>
        <option value="03">select03</option>
    </select>
    <br>
    <br>

    <!-- checkBox 데이터 바인딩 -->
    <div>
        check01<input type="checkbox" value="check01" v-model="inputCheck">
        check02<input type="checkbox" value="check02" v-model="inputCheck">
        check03<input type="checkbox" value="check03" v-model="inputCheck">
        <br>
        <span>{{ inputCheck }}</span>
    </div>
    <br>
    <br>

    <!-- radio 데이터 바인딩 -->
    <div>
        radio01<input type="radio" v-bind:value="radio01" v-model="inputRadio">
        radio02<input type="radio" v-bind:value="radio02" v-model="inputRadio">
        radio03<input type="radio" v-bind:value="radio03" v-model="inputRadio">
        <br>
        <span>{{ inputRadio }}</span>
    </div>






    <!----------------- Html Attribute 데이터 바인딩    v-bind: / : ------------------------>

    <!-- src 바인딩 -->
    <div>
        <img v-bind:src="bindSrc" />
    </div>

    <!-- disabled 바인딩 -->
    <div>
        <input type="text"  v-model="textValue">
        <button type="button" v-bind:disabled="textValue==''">Click</button>
    </div>

    <!-- class 바인딩 1 -->
    <div>
        <div class="container" v-bind:class="{'active' : isActive, 'text-red' : hasError}">Class Binding</div>
    </div>

    <!-- class 바인딩 2-->
    <div>
        <div class="container" v-bind:class="[activeClass, errorClass]">Class Binding</div>
    </div>

    <!-- inLine Style 바인딩 -->
    <div>
        <div v-bind:style="styleObject">
            Inline Style Binding
        </div>
    </div>


    <!-- 리스트 렌더링 v-for -->
    <div>
        <table>
            <thead>
                <tr>
                    <th>Index</th>
                    <th>Name</th>
                    <th>Price</th>
                    <th>Category</th>
                </tr>
            </thead>
            <tbody>
                
                <tr :key="i" v-for="(product, i) in productList">
                    <td>{{ i }}</td>
                    <td>{{ product.productName }}</td>
                    <td>{{ product.productPrice }}</td>
                    <td>{{ product.category }}</td>
                </tr>
            </tbody>
        </table>
    </div>

    <!-- 조건 렌더링1        v-if v-else-if v-else -->
    <div>
        <div v-if="ifRender == 'if'">if</div>
        <div v-else-if="ifRender == 'elseIf'">else if</div>
        <div v-else >else</div>
    </div>

    <!-- 조건 렌더링2        v-show -->
    <div>
        <div v-show="showRender">show</div>
    </div>

    <!--------------------- 이벤트 v-on: / @ -------------------->

    <!-- v-on:click  @click-->
    <div>
        <button type="button" v-on:click="increaseCounter">Add 1</button>
        <span>{{ counter }}</span>
    </div>

    <div>
        <button type="button" @click="alertOne(1), alertTwo(2)">Alert 1&2</button>
    </div>

    <!-- v-on:change  @change -->
    <div>
        <select v-model="selectedValue" @change="changeSelect">
            <option value="서울">서울</option>
            <option value="부산">부산</option>
            <option value="제주">제주</option>
        </select>
    </div>

    <!-- v-on:keyup    @keyup -->
    <div>
        <input @keyup.enter="submit"/>
    </div>







</template>

<script>
export default {
    name: 'DataBinding',
    components: {},
    data() {
        return {
            stringData: 'String Data',
            htmlData: '<p style="color:red">htmlData</p>',
            inputText: 'text',
            inputNumber: 1,
            inputTextArea: 'message',
            inputSelect: '01',
            inputCheck: [],
            inputRadio: '',
            radio01 : 'radio01',
            radio02 : 'radio02',
            radio03 : 'radio03',
            bindImgSrc: '../assets/logo.png',
            textValue: '',
            isActive: false,
            hasError: true,
            activeClass: 'active',
            errorClass: "text-red",
            styleObject: {
                color: 'blue',
                fontSize: '13px'

            },
            ifRender: 'if',
            showRender: true,

            productList: [
                {"productName" : "product01",
                "productPrice" : 100000,
                "category" : "category01"},
                {"productName" : "product02",
                "productPrice" : 200000,
                "category" : "category02"},
                {"productName" : "product03",
                "productPrice" : 300000,
                "category" : "category03"}
            ],
            counter: 0,
            selectedValue: '',
            

            




        };
    },
    setup() {
    },
    created() {
    },
    mounted() {
    },
    unmounted() {
    },
    methods: {
        increaseCounter() {
            this.counter = this.counter + 1;
        },

        alertOne(num) {
            alert(num);
        },

        alertTwo(num) {
            alert(num);
        },
        changeSelect() {
            alert(this.selectedValue);
        }
    }
    }
</script>
<style scoped>
    .active {
        color: yellow;
    }
    .text-red {
        color: red;
    }
</style>