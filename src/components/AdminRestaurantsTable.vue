<template>
  <table class="table">
    <thead class="thead-dark">
      <tr>
        <th scope="col">#</th>
        <th scope="col">Category</th>
        <th scope="col">Name</th>
        <th scope="col" width="300">操作</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="restaurant in restaurants" :key="restaurant.id">
        <th scope="row">
          {{ restaurant.id }}
        </th>
        <td>{{ restaurant.Category ? restaurant.Category.name : "未分類" }}</td>
        <td>{{ restaurant.name }}</td>
        <td class="d-flex justify-content-between">
          <router-link
            :to="{
              name: 'admin-restaurant',
              params: {
                id: restaurant.id,
              },
            }"
            class="btn btn-link"
            >Show</router-link
          >

          <router-link
            :to="{
              name: 'admin-restaurants-edit',
              params: {
                id: restaurant.id,
              },
            }"
            class="btn btn-link"
            >Edit</router-link
          >

          <button
            type="button"
            class="btn btn-link"
            @click.stop.prevent="deleteRestaurant(restaurant.id)"
          >
            Delete
          </button>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
const dummyData = {
  // ... 請貼上 API 資料
  restaurants: [
    {
      id: 1,
      name: "Mellie Schuppe",
      tel: "(915) 611-7223",
      address: "47090 Julien Stream",
      opening_hours: "08:00",
      description: "aliquam dolores qui",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=1.7742060947922411",
      viewCounts: 1,
      createdAt: "2022-01-29T12:03:27.000Z",
      updatedAt: "2022-02-02T09:36:20.000Z",
      CategoryId: 5,
      Category: {
        id: 5,
        name: "素食料理",
        createdAt: "2022-01-29T12:03:27.000Z",
        updatedAt: "2022-01-29T12:03:27.000Z",
      },
    },
    {
      id: 2,
      name: "Meta Howe",
      tel: "402.522.3339 x939",
      address: "694 Breitenberg Neck",
      opening_hours: "08:00",
      description: "beatae",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=2.6238788574246996",
      viewCounts: 0,
      createdAt: "2022-01-29T12:03:27.000Z",
      updatedAt: "2022-01-29T12:03:27.000Z",
      CategoryId: 3,
      Category: {
        id: 3,
        name: "義大利料理",
        createdAt: "2022-01-29T12:03:27.000Z",
        updatedAt: "2022-01-29T12:03:27.000Z",
      },
    },
    {
      id: 3,
      name: "Alayna Morissette",
      tel: "(526) 235-9565 x57861",
      address: "391 Bradtke Well",
      opening_hours: "08:00",
      description:
        "Saepe eum magnam debitis quo.\nReprehenderit qui quisquam sapiente exercitationem suscipit omnis.\nCum voluptas vitae non omnis.\nEum quo praesentium cum qui ut nam maiores qui enim.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=93.49669715616302",
      viewCounts: 0,
      createdAt: "2022-01-29T12:03:27.000Z",
      updatedAt: "2022-01-29T12:03:27.000Z",
      CategoryId: 2,
      Category: {
        id: 2,
        name: "日本料理",
        createdAt: "2022-01-29T12:03:27.000Z",
        updatedAt: "2022-01-29T12:03:27.000Z",
      },
    },
    {
      id: 4,
      name: "Filomena Gleichner",
      tel: "010-226-3876",
      address: "020 Pouros Station",
      opening_hours: "08:00",
      description:
        "Maiores debitis explicabo laboriosam hic. Qui eos laudantium voluptas hic vitae commodi deleniti. Occaecati praesentium et consequatur assumenda. Earum enim ea non. Est cumque et facilis eos enim quis. Vel asperiores natus exercitationem numquam beatae occaecati.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=66.2847401983855",
      viewCounts: 0,
      createdAt: "2022-01-29T12:03:27.000Z",
      updatedAt: "2022-01-29T12:03:27.000Z",
      CategoryId: 3,
      Category: {
        id: 3,
        name: "義大利料理",
        createdAt: "2022-01-29T12:03:27.000Z",
        updatedAt: "2022-01-29T12:03:27.000Z",
      },
    },
    {
      id: 5,
      name: "Alexa Stanton",
      tel: "(218) 189-3000 x987",
      address: "047 Monahan Walks",
      opening_hours: "08:00",
      description:
        "Saepe corrupti animi reiciendis earum impedit vel est. Iure earum pariatur aut aut ea. Aspernatur quia rerum impedit facere eaque odit. Qui quae quae id ipsa. Magni doloremque dignissimos ullam doloremque eum.\n \rSimilique harum at maxime vel inventore. Minus consequuntur temporibus ad ipsum magni et sit inventore eum. Qui molestias voluptas cumque assumenda eius. Quasi quis illo eius provident magnam dolore quidem quas ipsam. Impedit iste soluta eligendi culpa labore pariatur non. Recusandae mollitia omnis magnam et similique et odit quia.\n \rFugiat nulla ratione illum fugit et eos ut. Est consequuntur in sit harum nulla praesentium ab aperiam. Iure architecto voluptate. Sint minus commodi ab voluptatum animi cumque quasi tempore. Quia voluptas provident sit dolorem recusandae velit omnis. Soluta animi sit voluptas dolores.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=67.17979367321756",
      viewCounts: 0,
      createdAt: "2022-01-29T12:03:27.000Z",
      updatedAt: "2022-01-29T12:03:27.000Z",
      CategoryId: 2,
      Category: {
        id: 2,
        name: "日本料理",
        createdAt: "2022-01-29T12:03:27.000Z",
        updatedAt: "2022-01-29T12:03:27.000Z",
      },
    },
    {
      id: 6,
      name: "Alex Leannon",
      tel: "1-504-780-3499",
      address: "154 Hickle Prairie",
      opening_hours: "08:00",
      description:
        "Omnis neque consequatur ut voluptas rerum in. Quod et cupiditate rerum consequatur nesciunt enim autem deleniti vel. Autem odio culpa dolorem sit sapiente. Voluptas distinctio ratione non suscipit.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=79.47304486651325",
      viewCounts: 0,
      createdAt: "2022-01-29T12:03:27.000Z",
      updatedAt: "2022-01-29T12:03:27.000Z",
      CategoryId: 1,
      Category: {
        id: 1,
        name: "中式料理",
        createdAt: "2022-01-29T12:03:27.000Z",
        updatedAt: "2022-01-29T12:03:27.000Z",
      },
    },
    {
      id: 7,
      name: "Sabrina Stokes",
      tel: "(625) 196-6768",
      address: "30345 Kutch Ford",
      opening_hours: "08:00",
      description:
        "Omnis delectus accusantium quis consequatur voluptatum sit consequatur nihil molestiae.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=79.27777816472697",
      viewCounts: 0,
      createdAt: "2022-01-29T12:03:27.000Z",
      updatedAt: "2022-01-29T12:03:27.000Z",
      CategoryId: 5,
      Category: {
        id: 5,
        name: "素食料理",
        createdAt: "2022-01-29T12:03:27.000Z",
        updatedAt: "2022-01-29T12:03:27.000Z",
      },
    },
    {
      id: 8,
      name: "Godfrey McKenzie",
      tel: "(296) 977-8524",
      address: "1937 Jacobson Grove",
      opening_hours: "08:00",
      description:
        "Voluptas fugit facere. Libero voluptatum deleniti repellat. Autem aut ut. Quaerat nihil totam eos.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=14.109077346270738",
      viewCounts: 0,
      createdAt: "2022-01-29T12:03:27.000Z",
      updatedAt: "2022-01-29T12:03:27.000Z",
      CategoryId: 2,
      Category: {
        id: 2,
        name: "日本料理",
        createdAt: "2022-01-29T12:03:27.000Z",
        updatedAt: "2022-01-29T12:03:27.000Z",
      },
    },
    {
      id: 9,
      name: "Cale Crooks",
      tel: "205-100-0244 x01300",
      address: "0347 Koch Skyway",
      opening_hours: "08:00",
      description:
        "Et dicta quod sit voluptatem beatae corporis neque. Ut autem animi ut tempore rerum voluptatem reprehenderit et. Quam est recusandae iusto.\n \rUnde laudantium impedit consequatur et nisi optio porro et. Ducimus velit repudiandae accusamus voluptas quos consectetur nobis ut et. Impedit et modi.\n \rVoluptas non porro iste quidem dolorum dolor consequatur quis. Eum aut molestias a sed vitae nam nam esse. Ipsam ut quos velit sint ipsa.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=46.29863526246582",
      viewCounts: 0,
      createdAt: "2022-01-29T12:03:27.000Z",
      updatedAt: "2022-01-29T12:03:27.000Z",
      CategoryId: 3,
      Category: {
        id: 3,
        name: "義大利料理",
        createdAt: "2022-01-29T12:03:27.000Z",
        updatedAt: "2022-01-29T12:03:27.000Z",
      },
    },
    {
      id: 10,
      name: "Lera Corwin",
      tel: "1-576-193-1492",
      address: "219 Korey Motorway",
      opening_hours: "08:00",
      description:
        "Et molestias possimus asperiores voluptatem praesentium cumque fuga.\nEum numquam maiores.\nDistinctio ipsam earum temporibus consequatur quisquam alias nam.\nEa porro et aliquid in.\nAlias est voluptates assumenda.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=59.56156701075452",
      viewCounts: 0,
      createdAt: "2022-01-29T12:03:27.000Z",
      updatedAt: "2022-01-29T12:03:27.000Z",
      CategoryId: 1,
      Category: {
        id: 1,
        name: "中式料理",
        createdAt: "2022-01-29T12:03:27.000Z",
        updatedAt: "2022-01-29T12:03:27.000Z",
      },
    },
    {
      id: 11,
      name: "Yvette Bayer",
      tel: "(137) 584-5025",
      address: "63661 Brittany Common",
      opening_hours: "08:00",
      description:
        "Dignissimos dolorum iste mollitia maiores molestiae vel. Praesentium itaque atque ut expedita corrupti non dolorem vero. Enim minima quas vel expedita reiciendis. Reprehenderit odit dolor ad at voluptatem nemo fugit. Aut nam minima nulla occaecati tempora nisi cumque ipsa pariatur.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=16.509228976136782",
      viewCounts: 0,
      createdAt: "2022-01-29T12:03:27.000Z",
      updatedAt: "2022-01-29T12:03:27.000Z",
      CategoryId: 2,
      Category: {
        id: 2,
        name: "日本料理",
        createdAt: "2022-01-29T12:03:27.000Z",
        updatedAt: "2022-01-29T12:03:27.000Z",
      },
    },
    {
      id: 12,
      name: "Orval Boyle",
      tel: "1-418-702-0431",
      address: "24718 Amy Brooks",
      opening_hours: "08:00",
      description: "autem",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=96.34904539197935",
      viewCounts: 0,
      createdAt: "2022-01-29T12:03:27.000Z",
      updatedAt: "2022-01-29T12:03:27.000Z",
      CategoryId: 1,
      Category: {
        id: 1,
        name: "中式料理",
        createdAt: "2022-01-29T12:03:27.000Z",
        updatedAt: "2022-01-29T12:03:27.000Z",
      },
    },
    {
      id: 13,
      name: "Mylene Grant",
      tel: "492-354-7142",
      address: "570 Gleason Skyway",
      opening_hours: "08:00",
      description:
        "Laudantium nisi aliquam ipsam natus ipsam pariatur. Odio asperiores cum quisquam non. Et vero cum esse sint nihil tempore. Molestiae voluptatem dolores laudantium eum cupiditate eligendi. Ut quia ut dolores vel ut qui corrupti consectetur.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=96.51106671355463",
      viewCounts: 0,
      createdAt: "2022-01-29T12:03:27.000Z",
      updatedAt: "2022-01-29T12:03:27.000Z",
      CategoryId: 4,
      Category: {
        id: 4,
        name: "墨西哥料理",
        createdAt: "2022-01-29T12:03:27.000Z",
        updatedAt: "2022-01-29T12:03:27.000Z",
      },
    },
    {
      id: 14,
      name: "Lula Maggio",
      tel: "182-802-4883",
      address: "49728 Dixie Stravenue",
      opening_hours: "08:00",
      description: "Officiis ex id nam.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=37.70909700153968",
      viewCounts: 0,
      createdAt: "2022-01-29T12:03:27.000Z",
      updatedAt: "2022-01-29T12:03:27.000Z",
      CategoryId: 2,
      Category: {
        id: 2,
        name: "日本料理",
        createdAt: "2022-01-29T12:03:27.000Z",
        updatedAt: "2022-01-29T12:03:27.000Z",
      },
    },
    {
      id: 15,
      name: "Rory Larkin",
      tel: "367-663-5572",
      address: "888 Boehm Lodge",
      opening_hours: "08:00",
      description:
        "Et eum non. Accusamus non vel. Enim quis deserunt dolores. Quasi consequatur velit rerum sed dicta consequatur architecto. Occaecati unde voluptate sint numquam aut repudiandae blanditiis. Enim et ut.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=22.289852961493793",
      viewCounts: 0,
      createdAt: "2022-01-29T12:03:27.000Z",
      updatedAt: "2022-01-29T12:03:27.000Z",
      CategoryId: 4,
      Category: {
        id: 4,
        name: "墨西哥料理",
        createdAt: "2022-01-29T12:03:27.000Z",
        updatedAt: "2022-01-29T12:03:27.000Z",
      },
    },
    {
      id: 16,
      name: "Roma Morissette",
      tel: "1-747-691-7161 x7787",
      address: "644 Lukas Plaza",
      opening_hours: "08:00",
      description: "nesciunt",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=16.50119835523183",
      viewCounts: 0,
      createdAt: "2022-01-29T12:03:27.000Z",
      updatedAt: "2022-01-29T12:03:27.000Z",
      CategoryId: 5,
      Category: {
        id: 5,
        name: "素食料理",
        createdAt: "2022-01-29T12:03:27.000Z",
        updatedAt: "2022-01-29T12:03:27.000Z",
      },
    },
    {
      id: 17,
      name: "Pattie Nienow",
      tel: "077.455.2821 x462",
      address: "59246 Hilll Passage",
      opening_hours: "08:00",
      description:
        "Ad illum eos eaque temporibus et fugiat. Aspernatur dolorem omnis voluptatem delectus placeat aliquid. Odit deserunt sunt ut. Voluptatem impedit illo quo quibusdam magnam dolore. Sit nostrum velit deserunt aspernatur dolorem iste ut praesentium.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=69.61693100316113",
      viewCounts: 0,
      createdAt: "2022-01-29T12:03:27.000Z",
      updatedAt: "2022-01-29T12:03:27.000Z",
      CategoryId: 1,
      Category: {
        id: 1,
        name: "中式料理",
        createdAt: "2022-01-29T12:03:27.000Z",
        updatedAt: "2022-01-29T12:03:27.000Z",
      },
    },
    {
      id: 18,
      name: "Adrian Mills",
      tel: "(775) 742-7551",
      address: "71095 Lura Manor",
      opening_hours: "08:00",
      description:
        "Et molestiae sunt qui non quasi consequatur. Est commodi ab deserunt aut sint quam. Non aut vel repellat labore non maxime soluta.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=50.41551864116642",
      viewCounts: 0,
      createdAt: "2022-01-29T12:03:27.000Z",
      updatedAt: "2022-01-29T12:03:27.000Z",
      CategoryId: 4,
      Category: {
        id: 4,
        name: "墨西哥料理",
        createdAt: "2022-01-29T12:03:27.000Z",
        updatedAt: "2022-01-29T12:03:27.000Z",
      },
    },
    {
      id: 19,
      name: "Kacie Dooley",
      tel: "146-015-0066 x08480",
      address: "6367 Rhianna Haven",
      opening_hours: "08:00",
      description:
        "Vitae eos facilis qui dolorem nobis. Porro tempore quae quis. Nihil nemo ea sapiente saepe dolor eveniet. Provident voluptatem minima repellat vero non quae qui voluptates.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=61.8894785535244",
      viewCounts: 0,
      createdAt: "2022-01-29T12:03:27.000Z",
      updatedAt: "2022-01-29T12:03:27.000Z",
      CategoryId: 5,
      Category: {
        id: 5,
        name: "素食料理",
        createdAt: "2022-01-29T12:03:27.000Z",
        updatedAt: "2022-01-29T12:03:27.000Z",
      },
    },
    {
      id: 20,
      name: "Annabelle Langworth",
      tel: "294.400.9735 x650",
      address: "72590 Marcia Springs",
      opening_hours: "08:00",
      description:
        "Facere delectus corporis natus consequuntur alias. Corrupti nulla tempore sint placeat aut sit quis. Quasi earum similique voluptatum consequatur aliquid et est. Autem qui excepturi enim pariatur maiores. Delectus sit dolor qui aut ut quo odio vitae aliquam.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=13.7721344874989",
      viewCounts: 0,
      createdAt: "2022-01-29T12:03:27.000Z",
      updatedAt: "2022-01-29T12:03:27.000Z",
      CategoryId: 1,
      Category: {
        id: 1,
        name: "中式料理",
        createdAt: "2022-01-29T12:03:27.000Z",
        updatedAt: "2022-01-29T12:03:27.000Z",
      },
    },
    {
      id: 21,
      name: "Alexanne Schumm",
      tel: "458-187-7110",
      address: "06377 Verner Meadow",
      opening_hours: "08:00",
      description:
        "Distinctio accusamus aspernatur aut et.\nAnimi est nobis est rerum.\nAt asperiores ratione possimus consequatur id aut eligendi.\nAut tenetur fuga quia quam.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=6.4755700606546895",
      viewCounts: 0,
      createdAt: "2022-01-29T12:03:27.000Z",
      updatedAt: "2022-01-29T12:03:27.000Z",
      CategoryId: 3,
      Category: {
        id: 3,
        name: "義大利料理",
        createdAt: "2022-01-29T12:03:27.000Z",
        updatedAt: "2022-01-29T12:03:27.000Z",
      },
    },
    {
      id: 22,
      name: "Arianna Abernathy",
      tel: "240.507.2522 x954",
      address: "893 Jalon Mount",
      opening_hours: "08:00",
      description:
        "Et impedit voluptas ut nam est consequatur eaque. Qui saepe alias non et. Eos fugiat similique soluta atque. Qui est qui. Eveniet ipsam pariatur et quasi ad et ipsum molestiae provident.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=99.58141521905675",
      viewCounts: 0,
      createdAt: "2022-01-29T12:03:27.000Z",
      updatedAt: "2022-01-29T12:03:27.000Z",
      CategoryId: 3,
      Category: {
        id: 3,
        name: "義大利料理",
        createdAt: "2022-01-29T12:03:27.000Z",
        updatedAt: "2022-01-29T12:03:27.000Z",
      },
    },
    {
      id: 23,
      name: "Carmela Rau",
      tel: "(425) 661-0178",
      address: "69071 Charity Bypass",
      opening_hours: "08:00",
      description:
        "In in voluptate est mollitia est. Et molestias qui quidem. Excepturi dolores enim dolorum quidem temporibus sequi dolorem sunt eum. Autem molestias qui unde voluptas vero odit. Atque aut sequi labore unde necessitatibus tenetur illo porro itaque.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=31.517086570533337",
      viewCounts: 0,
      createdAt: "2022-01-29T12:03:27.000Z",
      updatedAt: "2022-01-29T12:03:27.000Z",
      CategoryId: 4,
      Category: {
        id: 4,
        name: "墨西哥料理",
        createdAt: "2022-01-29T12:03:27.000Z",
        updatedAt: "2022-01-29T12:03:27.000Z",
      },
    },
    {
      id: 24,
      name: "Earl Schaefer",
      tel: "(858) 916-2244 x2150",
      address: "38381 Armstrong Station",
      opening_hours: "08:00",
      description:
        "Totam voluptatum modi enim debitis dolores illum ipsa. Numquam sunt harum nemo blanditiis id cupiditate doloribus repellat. Autem repellat autem aut quisquam illum perspiciatis labore eius.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=85.32417066248965",
      viewCounts: 0,
      createdAt: "2022-01-29T12:03:27.000Z",
      updatedAt: "2022-01-29T12:03:27.000Z",
      CategoryId: 4,
      Category: {
        id: 4,
        name: "墨西哥料理",
        createdAt: "2022-01-29T12:03:27.000Z",
        updatedAt: "2022-01-29T12:03:27.000Z",
      },
    },
    {
      id: 25,
      name: "Dixie Rutherford",
      tel: "032-739-9872 x03681",
      address: "868 Carmine Springs",
      opening_hours: "08:00",
      description:
        "Quaerat esse officia ipsa quia sint. Sed soluta ex in minima.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=42.720199681639336",
      viewCounts: 0,
      createdAt: "2022-01-29T12:03:27.000Z",
      updatedAt: "2022-01-29T12:03:27.000Z",
      CategoryId: 2,
      Category: {
        id: 2,
        name: "日本料理",
        createdAt: "2022-01-29T12:03:27.000Z",
        updatedAt: "2022-01-29T12:03:27.000Z",
      },
    },
    {
      id: 26,
      name: "Mrs. Guy Dickens",
      tel: "009-585-7535 x77561",
      address: "45015 Nienow Valley",
      opening_hours: "08:00",
      description:
        "Cupiditate sunt excepturi animi possimus quos tempore voluptatibus. Provident id doloribus architecto impedit neque amet asperiores nobis. Beatae odio consequatur deserunt quam sunt dolorem. Occaecati enim ipsum aliquid. Et iure iure autem dicta modi.\n \rNon praesentium qui tenetur. Molestias voluptatem ad. Beatae harum ut itaque. Eveniet veniam cum et libero. Nemo totam id.\n \rUt perferendis iusto sed. Dicta eligendi deserunt ut. Culpa culpa voluptas et deleniti. Expedita alias rem repudiandae quisquam nihil. Omnis consectetur consequatur quaerat est deserunt. Dolorum veniam dolore esse omnis.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=92.87137652929547",
      viewCounts: 0,
      createdAt: "2022-01-29T12:03:27.000Z",
      updatedAt: "2022-01-29T12:03:27.000Z",
      CategoryId: 3,
      Category: {
        id: 3,
        name: "義大利料理",
        createdAt: "2022-01-29T12:03:27.000Z",
        updatedAt: "2022-01-29T12:03:27.000Z",
      },
    },
    {
      id: 27,
      name: "Maia Simonis",
      tel: "462.143.0388",
      address: "383 Alessandra Green",
      opening_hours: "08:00",
      description:
        "Possimus consequuntur at odit esse rerum. Culpa ut sapiente tempora quos voluptatum. Temporibus natus suscipit quod ut reiciendis rerum aperiam aut. Autem nihil cum ducimus accusantium. Numquam consectetur minus sunt occaecati perspiciatis perferendis et id.\n \rQuod nihil blanditiis fugiat. Sunt voluptatem occaecati modi omnis iusto esse harum autem. Facere aperiam omnis voluptatum qui est hic.\n \rMaxime reiciendis sint blanditiis ipsa sapiente. Eligendi voluptas corrupti qui quia. Consequatur repellendus ut blanditiis et commodi nihil dolore laboriosam et. Quae id dolore. Omnis tenetur eos.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=59.83093912407864",
      viewCounts: 0,
      createdAt: "2022-01-29T12:03:27.000Z",
      updatedAt: "2022-01-29T12:03:27.000Z",
      CategoryId: 3,
      Category: {
        id: 3,
        name: "義大利料理",
        createdAt: "2022-01-29T12:03:27.000Z",
        updatedAt: "2022-01-29T12:03:27.000Z",
      },
    },
    {
      id: 28,
      name: "Kory Zulauf III",
      tel: "857.873.3849",
      address: "6397 Gretchen Row",
      opening_hours: "08:00",
      description: "Deleniti vero similique.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=47.0685418582959",
      viewCounts: 0,
      createdAt: "2022-01-29T12:03:27.000Z",
      updatedAt: "2022-01-29T12:03:27.000Z",
      CategoryId: 1,
      Category: {
        id: 1,
        name: "中式料理",
        createdAt: "2022-01-29T12:03:27.000Z",
        updatedAt: "2022-01-29T12:03:27.000Z",
      },
    },
    {
      id: 29,
      name: "Miss Chance Yundt",
      tel: "1-118-867-9860",
      address: "35826 Deshaun Summit",
      opening_hours: "08:00",
      description:
        "Fuga qui ipsa culpa officiis aliquam velit est. Qui exercitationem ut quod. Sint repellendus odit est porro. Atque voluptates officia cupiditate ipsum blanditiis quia. Aut debitis expedita illo mollitia minima aut deserunt. Voluptas nostrum aut et.\n \rMinima natus reprehenderit et commodi veniam officia aspernatur enim. Quos repellat beatae ut doloremque quia consequatur delectus quos. Sed nisi dolor sint. Architecto voluptatibus saepe inventore omnis et recusandae quia.\n \rEst debitis temporibus facilis aperiam. Reprehenderit rerum sed aliquid ab est occaecati tempore exercitationem. Voluptatum labore autem enim molestiae qui debitis consequatur rerum. Esse eligendi non at saepe rerum animi impedit adipisci et. Quia voluptas nemo debitis blanditiis quae quidem magnam nisi.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=87.9100859853766",
      viewCounts: 0,
      createdAt: "2022-01-29T12:03:27.000Z",
      updatedAt: "2022-01-29T12:03:27.000Z",
      CategoryId: 5,
      Category: {
        id: 5,
        name: "素食料理",
        createdAt: "2022-01-29T12:03:27.000Z",
        updatedAt: "2022-01-29T12:03:27.000Z",
      },
    },
    {
      id: 30,
      name: "Damien DuBuque",
      tel: "(718) 548-6897 x2548",
      address: "874 Gislason Road",
      opening_hours: "08:00",
      description:
        "Voluptatem et dolores dolor possimus blanditiis eveniet molestias omnis ratione. Nihil consectetur rem maxime beatae architecto. Beatae accusantium autem et odit hic.\n \rLaudantium vel natus non et repellat maiores ut. Nostrum rem totam est iusto corporis incidunt nemo est. In voluptas ut. Quasi rerum accusamus corrupti qui aspernatur eveniet voluptatibus reiciendis ut.\n \rIpsam est eum dolorem est quibusdam deserunt ut et. Modi amet quia dolore nemo aperiam et nam. Nisi nihil sint iure porro est sunt eos minima et. Et et dolores fugiat tempora id mollitia. Sit ut dicta.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=16.30293164572838",
      viewCounts: 0,
      createdAt: "2022-01-29T12:03:27.000Z",
      updatedAt: "2022-01-29T12:03:27.000Z",
      CategoryId: 4,
      Category: {
        id: 4,
        name: "墨西哥料理",
        createdAt: "2022-01-29T12:03:27.000Z",
        updatedAt: "2022-01-29T12:03:27.000Z",
      },
    },
    {
      id: 31,
      name: "Aracely Flatley",
      tel: "160-042-0309",
      address: "08279 Barrows Crossing",
      opening_hours: "08:00",
      description:
        "Eaque tenetur doloremque dolores accusamus voluptatem voluptate voluptates.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=12.339568073195363",
      viewCounts: 0,
      createdAt: "2022-01-29T12:03:27.000Z",
      updatedAt: "2022-01-29T12:03:27.000Z",
      CategoryId: 5,
      Category: {
        id: 5,
        name: "素食料理",
        createdAt: "2022-01-29T12:03:27.000Z",
        updatedAt: "2022-01-29T12:03:27.000Z",
      },
    },
    {
      id: 32,
      name: "Dorothy Ledner",
      tel: "522-437-8950",
      address: "1971 Considine Hill",
      opening_hours: "08:00",
      description:
        "Unde odit corporis necessitatibus voluptas officiis voluptatem laborum. Libero illo nobis vero error et delectus necessitatibus. Hic iste magni est. Voluptate ea nemo reiciendis eaque. Quaerat ullam ut ut deserunt voluptatum asperiores exercitationem facere numquam. Quo atque debitis error.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=76.83846043721951",
      viewCounts: 0,
      createdAt: "2022-01-29T12:03:27.000Z",
      updatedAt: "2022-01-29T12:03:27.000Z",
      CategoryId: 4,
      Category: {
        id: 4,
        name: "墨西哥料理",
        createdAt: "2022-01-29T12:03:27.000Z",
        updatedAt: "2022-01-29T12:03:27.000Z",
      },
    },
    {
      id: 33,
      name: "Furman Kohler II",
      tel: "408.869.7402",
      address: "002 Chad Ford",
      opening_hours: "08:00",
      description:
        "Rerum qui vel aspernatur officiis rerum. Consequatur maiores et qui neque. Dolorem sunt ut perspiciatis. Id odit nobis ut voluptates magni fuga aut. Quod dolores qui ipsam ea adipisci.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=11.106046600337272",
      viewCounts: 0,
      createdAt: "2022-01-29T12:03:27.000Z",
      updatedAt: "2022-01-29T12:03:27.000Z",
      CategoryId: 4,
      Category: {
        id: 4,
        name: "墨西哥料理",
        createdAt: "2022-01-29T12:03:27.000Z",
        updatedAt: "2022-01-29T12:03:27.000Z",
      },
    },
    {
      id: 34,
      name: "Dr. Aida Keebler",
      tel: "490.069.6902 x004",
      address: "63536 Queen Pines",
      opening_hours: "08:00",
      description:
        "Molestiae vel facere rerum placeat omnis eum corporis perspiciatis praesentium. Deserunt aut adipisci.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=24.413949839115666",
      viewCounts: 0,
      createdAt: "2022-01-29T12:03:27.000Z",
      updatedAt: "2022-01-29T12:03:27.000Z",
      CategoryId: 2,
      Category: {
        id: 2,
        name: "日本料理",
        createdAt: "2022-01-29T12:03:27.000Z",
        updatedAt: "2022-01-29T12:03:27.000Z",
      },
    },
    {
      id: 35,
      name: "Jacklyn Wunsch",
      tel: "139.782.2526",
      address: "99277 Alberta Port",
      opening_hours: "08:00",
      description:
        "Libero laudantium quas ratione consequatur vel quis qui eligendi et. Quia ut et dolorum. Ut dolor aut officiis et recusandae officia tenetur et. Saepe et rerum quaerat vero dignissimos.\n \rAnimi sit delectus ullam. Dolor dolorum sit quia reiciendis est nihil voluptatibus iusto suscipit. Quasi ut expedita sequi. Nisi commodi illo placeat repellat animi ullam. Voluptatem voluptatibus ut rerum excepturi est et placeat ut ratione.\n \rConsequatur sit numquam voluptatem consectetur nam quas voluptates quae eum. Aut reprehenderit magnam corporis nihil eos. Nostrum ipsum voluptatibus aut sed quod omnis. Animi asperiores ut. Nulla quis quod in. Debitis est pariatur hic eos autem.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=79.00882604632432",
      viewCounts: 0,
      createdAt: "2022-01-29T12:03:27.000Z",
      updatedAt: "2022-01-29T12:03:27.000Z",
      CategoryId: 2,
      Category: {
        id: 2,
        name: "日本料理",
        createdAt: "2022-01-29T12:03:27.000Z",
        updatedAt: "2022-01-29T12:03:27.000Z",
      },
    },
    {
      id: 36,
      name: "Mireya Ullrich",
      tel: "(958) 101-7773 x106",
      address: "644 Hyman Row",
      opening_hours: "08:00",
      description:
        "Rerum ad voluptates unde laboriosam repudiandae soluta rerum quam vel.\nRerum doloribus sunt aut doloremque sint assumenda.\nQui rem aut dolorem rerum fugit sunt ipsam et.\nCorrupti minus voluptatem expedita in voluptas totam odio.\nBeatae ratione illum dolorem ut aliquam voluptas excepturi.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=58.042920711411526",
      viewCounts: 0,
      createdAt: "2022-01-29T12:03:27.000Z",
      updatedAt: "2022-01-29T12:03:27.000Z",
      CategoryId: 5,
      Category: {
        id: 5,
        name: "素食料理",
        createdAt: "2022-01-29T12:03:27.000Z",
        updatedAt: "2022-01-29T12:03:27.000Z",
      },
    },
    {
      id: 37,
      name: "Misael Will",
      tel: "891-662-9497 x11802",
      address: "8280 Emmerich Tunnel",
      opening_hours: "08:00",
      description: "Sunt enim qui iure et in nostrum aut tenetur hic.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=44.942844400362134",
      viewCounts: 0,
      createdAt: "2022-01-29T12:03:27.000Z",
      updatedAt: "2022-01-29T12:03:27.000Z",
      CategoryId: 3,
      Category: {
        id: 3,
        name: "義大利料理",
        createdAt: "2022-01-29T12:03:27.000Z",
        updatedAt: "2022-01-29T12:03:27.000Z",
      },
    },
    {
      id: 38,
      name: "Joyce Aufderhar",
      tel: "545.002.0975 x0637",
      address: "76667 Cartwright Avenue",
      opening_hours: "08:00",
      description:
        "Ducimus explicabo eos culpa omnis pariatur.\nDoloribus enim deleniti sed.\nTempore iure earum itaque adipisci sit sint ullam.\nUt non optio a id voluptatem magnam saepe unde.\nDolorem quisquam corrupti reiciendis qui facere nulla.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=98.88408116271847",
      viewCounts: 0,
      createdAt: "2022-01-29T12:03:27.000Z",
      updatedAt: "2022-01-29T12:03:27.000Z",
      CategoryId: 5,
      Category: {
        id: 5,
        name: "素食料理",
        createdAt: "2022-01-29T12:03:27.000Z",
        updatedAt: "2022-01-29T12:03:27.000Z",
      },
    },
    {
      id: 39,
      name: "Ms. Peter Hamill",
      tel: "(363) 034-3109",
      address: "5279 Hoeger Valley",
      opening_hours: "08:00",
      description: "qui",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=12.361946478881226",
      viewCounts: 0,
      createdAt: "2022-01-29T12:03:27.000Z",
      updatedAt: "2022-01-29T12:03:27.000Z",
      CategoryId: 5,
      Category: {
        id: 5,
        name: "素食料理",
        createdAt: "2022-01-29T12:03:27.000Z",
        updatedAt: "2022-01-29T12:03:27.000Z",
      },
    },
    {
      id: 40,
      name: "Betty Anderson",
      tel: "(886) 857-5381 x50004",
      address: "986 Spencer Spring",
      opening_hours: "08:00",
      description:
        "Alias amet ullam aut rerum et modi.\nReiciendis quos blanditiis ipsum voluptatum nesciunt architecto.\nEt voluptas iusto tempora qui distinctio.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=15.518662383053705",
      viewCounts: 0,
      createdAt: "2022-01-29T12:03:27.000Z",
      updatedAt: "2022-01-29T12:03:27.000Z",
      CategoryId: 2,
      Category: {
        id: 2,
        name: "日本料理",
        createdAt: "2022-01-29T12:03:27.000Z",
        updatedAt: "2022-01-29T12:03:27.000Z",
      },
    },
    {
      id: 41,
      name: "Arlene Lynch",
      tel: "(536) 999-3995 x37506",
      address: "14013 Kendra Hill",
      opening_hours: "08:00",
      description: "dolores doloribus aut",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=14.816394242536312",
      viewCounts: 0,
      createdAt: "2022-01-29T12:03:27.000Z",
      updatedAt: "2022-01-29T12:03:27.000Z",
      CategoryId: 1,
      Category: {
        id: 1,
        name: "中式料理",
        createdAt: "2022-01-29T12:03:27.000Z",
        updatedAt: "2022-01-29T12:03:27.000Z",
      },
    },
    {
      id: 42,
      name: "Rhoda Gulgowski",
      tel: "1-259-641-6649 x470",
      address: "915 Marcos Heights",
      opening_hours: "08:00",
      description: "consequatur porro rem",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=35.455827340545135",
      viewCounts: 0,
      createdAt: "2022-01-29T12:03:27.000Z",
      updatedAt: "2022-01-29T12:03:27.000Z",
      CategoryId: 4,
      Category: {
        id: 4,
        name: "墨西哥料理",
        createdAt: "2022-01-29T12:03:27.000Z",
        updatedAt: "2022-01-29T12:03:27.000Z",
      },
    },
    {
      id: 43,
      name: "Dariana Kohler",
      tel: "(580) 582-6710 x747",
      address: "926 Hickle Grove",
      opening_hours: "08:00",
      description:
        "Cumque velit nesciunt quas iure itaque rerum numquam minus.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=77.00599586928362",
      viewCounts: 0,
      createdAt: "2022-01-29T12:03:27.000Z",
      updatedAt: "2022-01-29T12:03:27.000Z",
      CategoryId: 5,
      Category: {
        id: 5,
        name: "素食料理",
        createdAt: "2022-01-29T12:03:27.000Z",
        updatedAt: "2022-01-29T12:03:27.000Z",
      },
    },
    {
      id: 44,
      name: "Anabelle Jacobson",
      tel: "809.993.8285 x109",
      address: "55709 Gust Pike",
      opening_hours: "08:00",
      description: "deserunt",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=12.160444757769518",
      viewCounts: 0,
      createdAt: "2022-01-29T12:03:27.000Z",
      updatedAt: "2022-01-29T12:03:27.000Z",
      CategoryId: 5,
      Category: {
        id: 5,
        name: "素食料理",
        createdAt: "2022-01-29T12:03:27.000Z",
        updatedAt: "2022-01-29T12:03:27.000Z",
      },
    },
    {
      id: 45,
      name: "Astrid Lesch",
      tel: "859-192-9035",
      address: "429 Hettinger Trail",
      opening_hours: "08:00",
      description: "odit qui exercitationem",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=71.81087114243682",
      viewCounts: 0,
      createdAt: "2022-01-29T12:03:27.000Z",
      updatedAt: "2022-01-29T12:03:27.000Z",
      CategoryId: 4,
      Category: {
        id: 4,
        name: "墨西哥料理",
        createdAt: "2022-01-29T12:03:27.000Z",
        updatedAt: "2022-01-29T12:03:27.000Z",
      },
    },
    {
      id: 46,
      name: "Mr. Torey Heathcote",
      tel: "1-917-326-1291",
      address: "580 O'Hara Course",
      opening_hours: "08:00",
      description: "Debitis voluptas aut et temporibus.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=40.82892476204207",
      viewCounts: 0,
      createdAt: "2022-01-29T12:03:27.000Z",
      updatedAt: "2022-01-29T12:03:27.000Z",
      CategoryId: 5,
      Category: {
        id: 5,
        name: "素食料理",
        createdAt: "2022-01-29T12:03:27.000Z",
        updatedAt: "2022-01-29T12:03:27.000Z",
      },
    },
    {
      id: 47,
      name: "Madeline Flatley",
      tel: "1-519-967-0757",
      address: "31636 Shyanne Pine",
      opening_hours: "08:00",
      description:
        "Repellendus sit laudantium tempore necessitatibus atque soluta doloribus.\nSunt eum ex natus totam.\nAccusantium temporibus sequi vero sequi non totam aliquid itaque.\nRecusandae officiis ullam excepturi eos ipsam eligendi.\nIllo atque fugit omnis veniam officiis delectus reprehenderit exercitationem.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=68.22187002581906",
      viewCounts: 0,
      createdAt: "2022-01-29T12:03:27.000Z",
      updatedAt: "2022-01-29T12:03:27.000Z",
      CategoryId: 1,
      Category: {
        id: 1,
        name: "中式料理",
        createdAt: "2022-01-29T12:03:27.000Z",
        updatedAt: "2022-01-29T12:03:27.000Z",
      },
    },
    {
      id: 48,
      name: "Izaiah Reynolds",
      tel: "(205) 552-0536",
      address: "865 Ivy Summit",
      opening_hours: "08:00",
      description: "consequatur voluptatibus harum",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=66.3488751512975",
      viewCounts: 0,
      createdAt: "2022-01-29T12:03:27.000Z",
      updatedAt: "2022-01-29T12:03:27.000Z",
      CategoryId: 4,
      Category: {
        id: 4,
        name: "墨西哥料理",
        createdAt: "2022-01-29T12:03:27.000Z",
        updatedAt: "2022-01-29T12:03:27.000Z",
      },
    },
    {
      id: 49,
      name: "Warren Rogahn",
      tel: "1-196-581-8814 x332",
      address: "2318 Savanna Islands",
      opening_hours: "08:00",
      description: "Autem tenetur qui iste laudantium cupiditate qui deserunt.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=72.33661090344481",
      viewCounts: 0,
      createdAt: "2022-01-29T12:03:27.000Z",
      updatedAt: "2022-01-29T12:03:27.000Z",
      CategoryId: 5,
      Category: {
        id: 5,
        name: "素食料理",
        createdAt: "2022-01-29T12:03:27.000Z",
        updatedAt: "2022-01-29T12:03:27.000Z",
      },
    },
    {
      id: 50,
      name: "Edwin Wyman",
      tel: "(143) 642-8686",
      address: "47861 Abdul Route",
      opening_hours: "08:00",
      description:
        "Ipsum deserunt temporibus sint voluptas ullam vel. Dolore ea ducimus ipsam quasi qui. Sit aut cum quos non sint labore magni minus. Dolor at culpa veniam omnis quos laudantium quis. Earum quia voluptatibus. Aut beatae consequatur architecto odit.\n \rError expedita ut sint doloribus reiciendis quisquam. Ipsam corporis in sed. Adipisci adipisci error et. Natus expedita tenetur aperiam omnis ipsam itaque impedit eaque iure. Et aperiam tempora et rerum et. Odit nihil dolorem.\n \rDolores quidem dolor voluptatum nihil. Et modi consectetur est aliquid sunt quia laboriosam aperiam. Delectus dolorum rerum porro. Vero aut deleniti. Repellat magni ratione consequuntur.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=65.33909761494844",
      viewCounts: 0,
      createdAt: "2022-01-29T12:03:27.000Z",
      updatedAt: "2022-01-29T12:03:27.000Z",
      CategoryId: 5,
      Category: {
        id: 5,
        name: "素食料理",
        createdAt: "2022-01-29T12:03:27.000Z",
        updatedAt: "2022-01-29T12:03:27.000Z",
      },
    },
  ],
};

export default {
  data() {
    return {
      restaurants: [],
    };
  },
  created() {
    this.fetchRestaurants();
  },
  methods: {
    fetchRestaurants() {
      this.restaurants = dummyData.restaurants;
    },
    deleteRestaurant(restaurantID) {
      console.log("id", restaurantID);
      this.restaurants = this.restaurants.filter(
        (restaurant) => restaurant.id !== restaurantID
      );
    },
  },
};
</script>
