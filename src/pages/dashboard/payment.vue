<template>
  <q-page padding>
    <!-- content -->
    <div class="q-pa-md">
      <q-form>
        <q-card class="q-ma-xs row" style="min-height: 530px">
          <div class="col-12 col-sm-6">
            <q-card class="q-ma-xs" style="background-color: #F4F6F8; height: calc(100% - 8px)">
              <q-item>
                <q-item-section>
                  <q-item-label class="text-bold">
                    <q-icon size="30px">
                      <img :src="require('../../assets/images/icons/cart_icn.svg')" />
                    </q-icon>
                    Order summary
                  </q-item-label>
                </q-item-section>
                <q-item-section avatar>
                  <q-btn flat>
                    Remove All
                  </q-btn>
                </q-item-section>
              </q-item>
              <q-list style="height: calc(100vh - 329px); overflow-y: auto;">
                <q-item v-for="index in 10" :key="index">
                  <q-item-section avatar>
                    <q-avatar size="48px">
                      <img :src="require('../../assets/images/icons/002-user.svg')">
                    </q-avatar>
                  </q-item-section>
                  <q-item-section>
                    <q-item-label>
                      Item name here
                    </q-item-label>
                    <q-item-label caption outline :lines="5">
                      Item name here
                    </q-item-label>
                  </q-item-section>
                  <q-item-section>
                    <div class="row items-center justify-end">
                      <div class="row items-center">
                        <q-btn round icon="fa fa-minus" size="xs"></q-btn>
                        <div class="q-px-sm">10</div>
                        <q-btn round icon="fa fa-plus" size="xs"></q-btn>
                      </div>
                      <div class="q-px-sm">$10.18</div>
                      <q-btn flat round icon="fa fa-trash-alt" size="xs"></q-btn>
                    </div>
                  </q-item-section>
                </q-item>
                <!-- <q-item class="justify-between" style="flex-wrap: wrap">
                  <div class="col-12 col-md-6 row">
                    <q-item-section avatar>
                      <q-avatar size="48px">
                        <img :src="require('../../assets/images/icons/002-user.svg')">
                      </q-avatar>
                    </q-item-section>
                    <q-item-section>
                      <span>
                        Item name here
                      </span>
                      <span>
                        Item name here
                      </span>
                    </q-item-section>
                  </div>
                  <div class="col-12 col-md-6 row items-center justify-end">
                    <q-btn round icon="fa fa-minus" size="xs"></q-btn>
                    <div class="q-px-sm">10</div>
                    <q-btn round icon="fa fa-plus" size="xs"></q-btn>
                    <div class="q-px-sm">$10.18</div>
                    <q-btn flat round icon="fa fa-trash-alt" size="xs"></q-btn>
                  </div>
                </q-item> -->
              </q-list>
              <q-separator spaced inset />
              <q-list class="text-bold">
                <q-item dense>
                  <q-item-section class="q-px-xs">
                      Subtotal
                  </q-item-section>
                  <q-item-section avatar class="q-px-xs">
                      $134.21
                  </q-item-section>
                </q-item>
                <q-item dense>
                  <q-item-section class="q-px-xs">
                      Shipping fees
                  </q-item-section>
                  <q-item-section avatar class="q-px-xs">
                      $134.21
                  </q-item-section>
                </q-item>
                <q-item dense>
                  <q-item-section class="q-px-xs">
                      Taxes
                  </q-item-section>
                  <q-item-section avatar class="q-px-xs">
                      $134.21
                  </q-item-section>
                </q-item>
                <q-item dense>
                  <q-item-section class="q-px-xs">
                      Total (including tax)
                  </q-item-section>
                  <q-item-section avatar class="q-px-xs">
                      $134.21
                  </q-item-section>
                </q-item>
              </q-list>
            </q-card>
          </div>
          <div class="col-12 col-sm-6">
            <q-card class="q-ma-xs" style="background-color: #1581ED; height: calc(100% - 8px)">
              <q-card-section class="q-py-lg" style="color: #FFF">
                <span>Current credit card</span>
                <q-card style="width: 230px; background-color: #3D93EA; border-radius: 10px;" class="q-pa-md q-mt-sm">
                  <q-icon size="30px" >
                    <img :src="require('../../assets/images/icons/visa_icn.svg')" />
                  </q-icon>
                  <div class="q-mt-lg" v-if="cardInfo.number.value">
                    <span>{{convertCardNumber(cardInfo.number.value)}}</span>
                  </div>
                  <div class="q-mt-lg" v-else>
                    <br/>
                  </div>
                  <div class="q-mt-sm" v-if="cardInfo.name.value">
                    <span>{{cardInfo.name.value}}</span>
                  </div>
                  <div class="q-mt-sm" v-else>
                    <br/>
                  </div>
                </q-card>
                <div class="q-mt-md">
                  <span>Name of card holder</span>
                  <q-input dense filled outlined borderless v-model="cardInfo.name.value" style="background-color: #1881ED;" :input-style="{ color: '#fff' }" />
                </div>
                <div class="q-mt-md">
                  <span>Credit card number</span>
                  <q-input dense filled outlined borderless v-model="cardInfo.number.value" style="background-color: #1881ED;" :input-style="{ color: '#fff' }" mask="####   ####   ####   ####" fill-mask="•" unmasked-value>
                    <template v-slot:append>
                      <img height="32" :src="require('../../assets/images/cards_img.svg')">
                    </template>
                  </q-input>
                </div>
                <div class="row q-mt-md">
                  <div class="col-6 q-pr-sm">
                    <span>Expiration</span>
                    <q-input dense filled outlined borderless v-model="cardInfo.expire_date.value" style="background-color: #1881ED;" :input-style="{ color: '#fff' }" mask="##/##" />
                  </div>
                  <div class="col-6 q-pl-sm">
                    <span>CVV</span>
                    <q-input dense filled outlined borderless v-model="cardInfo.cvv.value" style="background-color: #1881ED;" :input-style="{ color: '#fff' }" mask="###"/>
                  </div>
                </div>
                <div class="row q-mt-lg">
                  <div class="col-6 q-pr-sm">
                    <q-btn flat label="Make Payment" style="background-color: #fff; color: #1581ED; width: 100%; border-radius: 8px;" />
                  </div>
                  <div class="col-6 q-pl-sm">
                    <q-btn outline color="white" label="Cancel" style="width: 100%; border-radius: 8px;" />
                  </div>
                </div>
              </q-card-section>
            </q-card>
          </div>
        </q-card>
      </q-form>
    </div>
  </q-page>
</template>

<script>
import { ref } from "vue";
export default {
  name: 'Payment',
  setup () {
    function convertCardNumber(number) {
      return number ? number.match(/.{1,4}/g).join('   ') : '';
    }
    return {
      convertCardNumber,
      cardInfo: {
        name: ref(""), number: ref(""), expire_date: ref(""), cvv: ref("")
      },
      historySeries: [{
          name: "Projected Value",
          data: [13, 45, 38, 58, 69, 52, 79, 91, 148]
      }, {
          name: "Actual Value",
          data: [10, 41, 35, 51, 49, 62, 69, 91, 148]
      }],
      historyChartOptions: {
        chart: {
          height: 350,
          type: 'line',
          zoom: {
            enabled: false
          }
        },
        dataLabels: {
          enabled: false
        },
        stroke: {
          curve: 'straight'
        },
        grid: {
          row: {
            colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
            opacity: 0.5
          },
        },
        xaxis: {
          categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
        }
      },
      // transaction_pagination: {
      //   sortBy: 'transaction_date',
      //   descending: false,
      //   page: 1,
      //   rowsPerPage: 10,
      //   rowsNumber: 20
      // },
      orderColumns: [
        { name: 'nz_bondcode', required: true, label: 'NZ Bond Code', align: 'left', field: 'nz_bondcode' },
        { name: 'ordertype', required: true, label: 'OrderType', align: 'left', field: 'ordertype' },
        { name: 'quantity', required: true, label: 'Quantity', align: 'left', field: 'quantity' },
        { name: 'price', required: true, label: 'Price', align: 'left', field: 'price' },
        { name: 'total', required: true, label: 'Total', align: 'left', field: 'total' },
        { name: 'term', required: true, label: 'Term', align: 'left', field: 'term' },
        { name: 'buy_sell', required: true, label: 'Buy/Sell', align: 'left', field: 'buy_sell' },
        { name: 'status', required: true, label: 'Status', align: 'left', field: 'status' },
        { name: 'condition', required: true, label: 'Condition', align: 'left', field: 'condition' },
      ],
      orderList: [
        { nz_bondcode: "NZ01100-APC", ordertype: "Market", quantity: "1", price: "1000", total: "1000", term: "10/10/21@20:30", buy_sell: "Buy", status: "Closed", condition: "" },
        { nz_bondcode: "NZ01100-APC", ordertype: "Market", quantity: "1", price: "1000", total: "1000", term: "10/10/21@20:30", buy_sell: "Buy", status: "Open", condition: "Buy 5,200. Cancel < 4800" },
        { nz_bondcode: "NZ01100-APC", ordertype: "Market", quantity: "1", price: "1000", total: "1000", term: "10/10/21@20:30", buy_sell: "Sell", status: "Closed", condition: "" },
        { nz_bondcode: "NZ01100-APC", ordertype: "Market", quantity: "1", price: "1000", total: "1000", term: "10/10/21@20:30", buy_sell: "Buy", status: "Closed", condition: "" },
        { nz_bondcode: "NZ01100-APC", ordertype: "Market", quantity: "1", price: "1000", total: "1000", term: "10/10/21@20:30", buy_sell: "Buy", status: "Closed", condition: "" },
      ],
      bondSchedulerList: [
        { bond_pool: "BP100165AU", bond_price: 1100, expiry_date: "01/01/2022" },
        { bond_pool: "BP300169NZ", bond_price: 1100, expiry_date: "01/11/2022" }
      ]
    }
  }
}
</script>
