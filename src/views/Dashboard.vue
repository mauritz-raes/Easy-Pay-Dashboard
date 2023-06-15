<template>
  <div class="dashboard p-4">
    <!-- Top -->
    <div class="mt-2 w-full">
      <div
        class="lg:flex grid-cols-1 lg:space-y-0 space-y-3 gap-5 justify-between"
      >
        <div>
          <p class="uppercase text-xs text-gray-700 font-semibold">overzicht</p>
          <h1 class="text-2xl text-gray-900 dark:text-gray-200 font-medium">
            Dashboard
          </h1>
        </div>
      </div>
    </div>

    <!-- Card grid-->
    <div
      class="wrapper-card grid lg:grid-cols-4 grid-cols-1 md:grid-cols-2 gap-2 mt-5"
    >
      <!-- Omzet  -->
      <div
        class="card bg-white dark:bg-gray-800 w-full rounded-md p-5 border dark:border-gray-700 flex"
      >
        <div class="p-2 max-w-sm">
          <div
            class="bg-orange-200 rounded-full w-14 h-14 text-lg p-3 text-orange-600 mx-auto"
          >
            <span class="">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                role="img"
                width="30px"
                height="30px"
                preserveAspectRatio="xMidYMid meet"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M10 16V8a2 2 0 0 1 2-2h9V5c0-1.1-.9-2-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14c1.1 0 2-.9 2-2v-1h-9a2 2 0 0 1-2-2zm3-8c-.55 0-1 .45-1 1v6c0 .55.45 1 1 1h9V8h-9zm3 5.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5s1.5.67 1.5 1.5s-.67 1.5-1.5 1.5z"
                />
              </svg>
            </span>
          </div>
        </div>

        <div class="block p-2 w-full">
          <p class="font-semibold text-gray-900 dark:text-gray-200 text-xl">
            €554.214,74
          </p>
          <h2 class="font-normal text-gray-400 text-md mt-1">Omzet</h2>
        </div>
      </div>
      <!-- Transacties  -->      
      <div
        class="card bg-white dark:bg-gray-800 w-full rounded-md p-5 border dark:border-gray-700 flex"
      >
        <div class="p-2 max-w-sm">
          <div
            class="bg-green-200 rounded-full w-14 h-14 text-lg p-3 text-green-600 mx-auto"
          >
            <span class="">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                role="img"
                width="30px"
                height="30px"
                preserveAspectRatio="xMidYMid meet"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M5 22h14a2 2 0 0 0 2-2V9a1 1 0 0 0-1-1h-3v-.777c0-2.609-1.903-4.945-4.5-5.198A5.005 5.005 0 0 0 7 7v1H4a1 1 0 0 0-1 1v11a2 2 0 0 0 2 2zm12-12v2h-2v-2h2zM9 7c0-1.654 1.346-3 3-3s3 1.346 3 3v1H9V7zm-2 3h2v2H7v-2z"
                />
              </svg>
            </span>
          </div>
        </div>

        <div class="block p-2 w-full">
          <p class="font-semibold text-gray-900 dark:text-gray-200 text-xl">
            2153
          </p>
          <h2 class="font-normal text-gray-400 text-md mt-1">Transacties</h2>
        </div>
      </div>
      <!-- Gebruikers  -->         
      <div
        class="card bg-white dark:bg-gray-800 w-full rounded-md p-5 border dark:border-gray-700 flex"
      >
        <div class="p-2 max-w-sm">
          <div
            class="bg-red-200 rounded-full w-14 h-14 text-lg p-3 text-red-600 mx-auto"
          >
            <span class="">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                role="img"
                width="30px"
                height="30px"
                preserveAspectRatio="xMidYMid meet"
                viewBox="0 0 32 32"
              >
                <path
                  fill="none"
                  d="M8.007 24.93A4.996 4.996 0 0 1 13 20h6a4.996 4.996 0 0 1 4.993 4.93a11.94 11.94 0 0 1-15.986 0ZM20.5 12.5A4.5 4.5 0 1 1 16 8a4.5 4.5 0 0 1 4.5 4.5Z"
                />
                <path
                  fill="currentColor"
                  d="M26.749 24.93A13.99 13.99 0 1 0 2 16a13.899 13.899 0 0 0 3.251 8.93l-.02.017c.07.084.15.156.222.239c.09.103.187.2.28.3c.28.304.568.596.87.87c.092.084.187.162.28.242c.32.276.649.538.99.782c.044.03.084.069.128.1v-.012a13.901 13.901 0 0 0 16 0v.012c.044-.031.083-.07.128-.1c.34-.245.67-.506.99-.782c.093-.08.188-.159.28-.242c.302-.275.59-.566.87-.87c.093-.1.189-.197.28-.3c.071-.083.152-.155.222-.24ZM16 8a4.5 4.5 0 1 1-4.5 4.5A4.5 4.5 0 0 1 16 8ZM8.007 24.93A4.996 4.996 0 0 1 13 20h6a4.996 4.996 0 0 1 4.993 4.93a11.94 11.94 0 0 1-15.986 0Z"
                />
              </svg>
            </span>
          </div>
        </div>

        <div class="block p-2 w-full">
          <p class="font-semibold text-gray-900 dark:text-gray-200 text-xl">
            1453
          </p>
          <h2 class="font-normal text-gray-400 text-md mt-1">
            Gebruikers
          </h2>
        </div>
      </div>
      <!-- API Calls  -->   
      <div
        class="card bg-white dark:bg-gray-800 w-full rounded-md p-5 border dark:border-gray-700 flex"
      >
        <div class="p-2 max-w-sm">
          <div
            class="bg-purple-200 rounded-full w-14 h-14 text-lg p-3 text-purple-600 mx-auto"
          >
            <span class="">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                role="img"
                width="30px"
                height="30px"
                preserveAspectRatio="xMidYMid meet"
                viewBox="0 0 16 16"
              >
                <g fill="currentColor">
                  <path d="M15 13v1H1.5l-.5-.5V0h1v13h13Z" />
                  <path
                    d="M13 3.207L7.854 8.354h-.708L5.5 6.707l-3.646 3.647l-.708-.708l4-4h.708L7.5 7.293l5.146-5.147h.707l2 2l-.707.708L13 3.207Z"
                  />
                </g>
              </svg>
            </span>
          </div>
        </div>

        <div class="block p-2 w-full">
          <p class="font-semibold text-gray-900 dark:text-gray-200 text-xl">
            154852
          </p>
          <h2 class="font-normal text-gray-400 text-md mt-1">API Calls</h2>
        </div>
      </div>      
    </div> 

    <div class="mt-2 lg:flex block lg:gap-2">
      <div
        class="mt-2 bg-white dark:bg-gray-800 p-0 w-full rounded-md box-border border dark:border-gray-700"
      >
        <div class="head p-5">
          <h2 class="font-bold text-lg text-gray-800 dark:text-gray-200">
            1,780
          </h2>
          <p class="text-gray-400 font-lexend font-normal">
            Transacties
          </p>
          <span class="float-right">
            <h2 class="text-green-500 -mt-12 flex">
              <span class="mr-2"> 108.9% </span
              ><span>
                <Icon icon="akar-icons:arrow-up" />
              </span>
            </h2>
          </span>
        </div>
        <div class="wrapper-chart mt-5 pr-2 pl-2">
          <apexchart
            width="100%"
            height="380"
            type="bar"
            :options="optionsBar"
            :series="seriesBar"
          ></apexchart>
          <br />
          <hr />
          <div class="footer p-5">
            <div class="wrapper-button flex justify-between mt-3">
              <select
                name=""
                id=""
                class="dark:bg-gray-800 dark:hover:bg-gray-700 dark:border-gray-700 border max-w-lg px-4 py-3 block rounded-md text-gray-500 dark:text-gray-400"
              >
                <option value="">Laatste 7 dagen</option>
              </select>
              <button class="uppercase border-b border-red-600 text-red-600">
                Export report
              </button>
            </div>
          </div>
        </div>
      </div>
      <!-- Transacties  -->   
      <div
        class="mt-2 bg-white dark:bg-gray-800 p-0 w-full rounded-md box-border border dark:border-gray-700"
      >
        <div class="head p-5">
          <h2 class="font-bold text-lg text-gray-800 dark:text-gray-200">
            5,355
          </h2>
          <p class="text-gray-400 font-lexend font-normal">APÏ Calls</p>

          <span class="float-right">
            <h2 class="text-green-500 -mt-12 flex">
              <span class="mr-2"> 47.9% </span
              ><span>
                <Icon icon="akar-icons:arrow-up" />
              </span>
            </h2>
          </span>
        </div>
        <div class="wrapper-chart mt-5">
          <apexchart
            width="100%"
            height="380"
            type="area"
            :options="optionsTrans"
            :series="seriesTrans"
          ></apexchart>
          <br />
          <hr />
          <div class="footer p-5">
            <div class="wrapper-button flex justify-between mt-3">
              <select
                name=""
                id=""
                class="dark:bg-gray-800 dark:hover:bg-gray-700 dark:border-gray-700 border max-w-lg px-4 py-3 block rounded-md text-gray-500 dark:text-gray-400"
              >
                <option value="">Laatste 7 dagen</option>
              </select>
              <button class="uppercase border-b border-red-600 text-red-600">
                Export report
              </button>
            </div>
          </div>
        </div>
      </div>
      <div
        class="mt-2 bg-white dark:bg-gray-800 p-0 w-full rounded-md box-border border dark:border-gray-700"
      >
        <div class="head p-5">
          <h2 class="font-bold text-lg text-gray-800 dark:text-gray-200">
            475
          </h2>
          <p class="text-gray-400 font-lexend font-normal">
            Nieuwe gebruikers
          </p>
        </div>

        <div class="wrapper-chart mt-5">
          <apexchart
            width="100%"
            height="380"
            type="pie"
            :options="optionsDonut"
            :series="seriesDonut"
          ></apexchart>
          <div class="p-3"></div>
          <br />
          <hr />
          <div class="footer p-5">
            <div class="wrapper-button flex justify-between mt-3">
              <select
                name=""
                id=""
                class="dark:bg-gray-800 dark:hover:bg-gray-700 border dark:border-gray-700 max-w-lg px-4 py-3 block rounded-md text-gray-500 dark:text-gray-400"
              >
                <option value="">Laatste 7 dagen</option>
              </select>

              <button class="uppercase border-b border-red-600 text-red-600">
                Export report
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div
      class="mt-2 bg-white dark:bg-gray-800 p-5 w-full rounded-md box-border border dark:border-gray-700"
    >
      <h2 class="font-bold text-lg text-gray-800 dark:text-gray-200">
        Transacties
      </h2>
      <p class="text-gray-400 font-lexend font-normal">
        Lijst van de laatste transacties
      </p>
      <div class="wrapping-table mt-10">
        <table
          class="w-full text-sm text-left text-gray-500 dark:text-gray-400 lg:overflow-auto overflow-x-scroll"
        >
          <thead
            class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400"
          >
            <tr>
              <th
                scope="col"
                class="uppercase px-6 py-3"
              >
                Transactie
              </th>
              <th
                scope="col"
                class="uppercase px-6 py-3"
              >
                Datum & Tijdstip
              </th>
              <th
                scope="col"
                class="uppercase px-6 py-3"
              >
                Bedrag
              </th>
              <th
                scope="col"
                class="uppercase px-6 py-3"
              >
                Status
              </th>
            </tr>
          </thead>
          <tbody>
            <tr
              class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 odd:bg-white even:bg-gray-50"
              v-for="items in tableTransaction"
              :key="items.transaction"
            >
              <td class="px-6 py-4">
                {{ items.transaction }}
              </td>
              <td class="px-6 py-4">
                {{ items.datetime }}
              </td>
              <td class="px-6 py-4">
                {{ items.amount }}
              </td>
              <td class="px-6 py-4">
                <span
                  class="text-green-800 bg-green-300 px-3 py-1 rounded-md"
                  v-if="items.statusTransaction == 'compleet'"
                >
                  {{ items.statusTransaction }}
                </span>
                <span
                  class="text-purple-800 bg-purple-300 px-3 py-1 rounded-md"
                  v-else-if="items.statusTransaction == 'in verwerking'"
                >
                  {{ items.statusTransaction }}
                </span>
                <span
                  class="text-red-800 bg-red-300 px-3 py-1 rounded-md"
                  v-else
                >
                  {{ items.statusTransaction }}
                </span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="wrapper-button flex justify-between mt-3">
        <select
          name=""
          id=""
          class="dark:bg-gray-800 dark:hover:bg-gray-700 border dark:border-gray-700 max-w-lg px-4 py-3 block rounded-md text-gray-500 dark:text-gray-400"
        >
          <option value="">Laatste 7 dagen</option>
        </select>
        <button class="uppercase border-b border-red-600 text-red-600">
          Export Report
        </button>
      </div>
    </div>
  </div>
</template>

<script>
  
  import { Icon } from "@iconify/vue";

  export default {
    name: "Dashboard",
    data() {
      return {
        // apexchart.js     

        optionsBar: {
          chart: {
            toolbar: {
              show: false,
            },
            zoom: {
              enabled: false,
            },
            sparkline: {
              enabled: true,
            },
          },
          legend: {
            show: false,
          },
          xaxis: {
            show: false,
          },
          yaxis: {
            show: false,
          },
          colors: ["#8a0000", "#46b000"],
          dataLabels: {
            enabled: false,
          },
          stroke: {
            curve: "straight",
          },
        },
        
        seriesBar: [
          {
            name: "geannuleerd",
            data: [2, 4, 5, 5, 3, 6, 7, 9],
          },
          {
            name: "compleet",
            data: [20, 34, 45, 55, 79, 87, 90, 98],
          },
        ],
        optionsTrans: {
          chart: {
            toolbar: {
              show: false,
            },
            zoom: {
              enabled: false,
            },
            sparkline: {
              enabled: true,
            },
          },
          legend: {
            show: false,
          },
          xaxis: {
            show: false,
          },
          yaxis: {
            show: false,
          },
          colors: ["#4f46e5"],
          dataLabels: {
            enabled: false,
          },
          fill: {
            type: "gradient",
            gradient: {
              shadeIntensity: 0,
              opacityFrom: 0,
              opacityTo: 0.3,
              stops: [0, 90, 100],
            },
          },
          stroke: {
            curve: "smooth",
          },
        },

        seriesTrans: [
          {
            name: "Transacties ",
            data: [30, 40, 45, 50, 49, 60, 70, 91],
          },
        ],
        optionsDonut: {
          chart: {
            type: "donut",
          },
          legend: false,
          dataLabels: {
            enabled: false,
          },
          labels: ["Bank", "Webshop", "Consument"],
        },

        seriesDonut: [5, 15, 83],
        tableTransaction: [
          {
            transaction: "Betaling van Luc Vervoort",
            datetime: "Apr 22, 2023",
            amount: "EUR 750,00",
            statusTransaction: "compleet",
          },
          {
            transaction: "Betaling van Emma Rossum",
            datetime: "Mei 2, 2023",
            amount: "EUR 33,20",
            statusTransaction: "compleet",
          },
          {
            transaction: "Betaling van Felix Lengyel",
            datetime: "Mei 5, 2023",
            amount: "EUR 51,95",
            statusTransaction: "in verwerking",
          },
          {
            transaction: "Betaling van Abraham Lincoln",
            datetime: "Mei 5, 2023",
            amount: "EUR 54,00",
            statusTransaction: "geannuleerd",
          },
        ],
      };      
    },
    components: {
      Icon,
    },
    mounted() {},
  };
</script>
