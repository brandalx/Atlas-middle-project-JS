export default class Atlas {
  constructor(_parent, _item) {
    this.parent = _parent;
    this.name = _item.name.common;
    this.population = _item.population;
    this.region = _item.region;
    this.languages = _item.languages;
    this.currencies = _item.currencies;
    this.capital = _item.capital;
    this.borders = _item.borders;
    this.maps = _item.maps.googleMaps;
    this.flags = _item.flags.png;
  }
  render() {
    let div = document.createElement("div");
    div.className = "row";
    document.querySelector(this.parent).append(div);
    div.innerHTML = ` 
    <div class="row">
    <div class="col-12 country-data" id="info-appender">
      <div class="row justify-content-between">
        <div class="col-lg-6 col-sm-12">
          <img
            class="w-100 rounded-3 shadow-lg scale-in-center"
            src="${this.flags}"
            alt=""
          />
        </div>
        <div class="col-lg-4 col-sm-12 mt-4 mt-lg-0">
          <h2 class="fw-bolder">General information:</h2>
          <h3>${this.name}</h3>
          <p>
            <n class="text-secondary"
              ><svg
                width="21"
                height="21"
                viewBox="0 0 21 21"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0 21C0 18.8783 0.842855 16.8434 2.34315 15.3431C3.84344 13.8429 5.87827 13 8 13C10.1217 13 12.1566 13.8429 13.6569 15.3431C15.1571 16.8434 16 18.8783 16 21H14C14 19.4087 13.3679 17.8826 12.2426 16.7574C11.1174 15.6321 9.5913 15 8 15C6.4087 15 4.88258 15.6321 3.75736 16.7574C2.63214 17.8826 2 19.4087 2 21H0ZM8 12C4.685 12 2 9.315 2 6C2 2.685 4.685 0 8 0C11.315 0 14 2.685 14 6C14 9.315 11.315 12 8 12ZM8 10C10.21 10 12 8.21 12 6C12 3.79 10.21 2 8 2C5.79 2 4 3.79 4 6C4 8.21 5.79 10 8 10ZM16.284 13.703C17.6893 14.3359 18.882 15.3612 19.7186 16.6557C20.5552 17.9502 21.0002 19.4587 21 21H19C19.0002 19.844 18.6666 18.7125 18.0391 17.7416C17.4116 16.7707 16.5171 16.0017 15.463 15.527L16.284 13.703ZM15.596 2.413C16.6035 2.8283 17.465 3.53354 18.071 4.43923C18.6771 5.34492 19.0004 6.41024 19 7.5C19.0004 8.87233 18.4877 10.1952 17.5625 11.2088C16.6374 12.2224 15.3667 12.8535 14 12.978V10.965C14.7409 10.8589 15.4283 10.518 15.9613 9.99246C16.4943 9.4669 16.8447 8.78432 16.9612 8.04493C17.0776 7.30555 16.954 6.5483 16.6084 5.88435C16.2628 5.22041 15.7134 4.68475 15.041 4.356L15.596 2.413Z"
                  fill="var(--primary)"
                />
              </svg>
              Population:</n
            >
            ${this.population.toLocaleString()}
          </p>
          <p>
            <n class="text-secondary"
              ><svg
                width="14"
                height="20"
                viewBox="0 0 14 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7 4.5C7.66304 4.5 8.29893 4.76339 8.76777 5.23223C9.23661 5.70107 9.5 6.33696 9.5 7C9.5 7.3283 9.43534 7.65339 9.3097 7.95671C9.18406 8.26002 8.99991 8.53562 8.76777 8.76777C8.53562 8.99991 8.26002 9.18406 7.95671 9.3097C7.65339 9.43534 7.3283 9.5 7 9.5C6.33696 9.5 5.70107 9.23661 5.23223 8.76777C4.76339 8.29893 4.5 7.66304 4.5 7C4.5 6.33696 4.76339 5.70107 5.23223 5.23223C5.70107 4.76339 6.33696 4.5 7 4.5ZM7 0C8.85652 0 10.637 0.737498 11.9497 2.05025C13.2625 3.36301 14 5.14348 14 7C14 12.25 7 20 7 20C7 20 0 12.25 0 7C0 5.14348 0.737498 3.36301 2.05025 2.05025C3.36301 0.737498 5.14348 0 7 0ZM7 2C5.67392 2 4.40215 2.52678 3.46447 3.46447C2.52678 4.40215 2 5.67392 2 7C2 8 2 10 7 16.71C12 10 12 8 12 7C12 5.67392 11.4732 4.40215 10.5355 3.46447C9.59785 2.52678 8.32608 2 7 2Z"
                  fill="var(--primary)"
                />
              </svg>
              Region:</n
            >
            ${this.region}
          </p>
          <p>
            <n class="text-secondary"
              ><svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10 20C8.63333 20 7.34167 19.7373 6.125 19.212C4.90833 18.6873 3.846 17.9707 2.938 17.062C2.02933 16.154 1.31267 15.0917 0.788 13.875C0.262667 12.6583 0 11.3667 0 10C0 8.61667 0.262667 7.321 0.788 6.113C1.31267 4.90433 2.02933 3.846 2.938 2.938C3.846 2.02933 4.90833 1.31233 6.125 0.787C7.34167 0.262333 8.63333 0 10 0C11.3833 0 12.679 0.262333 13.887 0.787C15.0957 1.31233 16.154 2.02933 17.062 2.938C17.9707 3.846 18.6873 4.90433 19.212 6.113C19.7373 7.321 20 8.61667 20 10C20 11.3667 19.7373 12.6583 19.212 13.875C18.6873 15.0917 17.9707 16.154 17.062 17.062C16.154 17.9707 15.0957 18.6873 13.887 19.212C12.679 19.7373 11.3833 20 10 20ZM10 17.95C10.4333 17.35 10.8083 16.725 11.125 16.075C11.4417 15.425 11.7 14.7333 11.9 14H8.1C8.3 14.7333 8.55833 15.425 8.875 16.075C9.19167 16.725 9.56667 17.35 10 17.95ZM7.4 17.55C7.1 17 6.83767 16.429 6.613 15.837C6.38767 15.2457 6.2 14.6333 6.05 14H3.1C3.58333 14.8333 4.18733 15.5583 4.912 16.175C5.63733 16.7917 6.46667 17.25 7.4 17.55ZM12.6 17.55C13.5333 17.25 14.3623 16.7917 15.087 16.175C15.8123 15.5583 16.4167 14.8333 16.9 14H13.95C13.8 14.6333 13.6127 15.2457 13.388 15.837C13.1627 16.429 12.9 17 12.6 17.55ZM2.25 12H5.65C5.6 11.6667 5.56233 11.3373 5.537 11.012C5.51233 10.6873 5.5 10.35 5.5 10C5.5 9.65 5.51233 9.31267 5.537 8.988C5.56233 8.66267 5.6 8.33333 5.65 8H2.25C2.16667 8.33333 2.104 8.66267 2.062 8.988C2.02067 9.31267 2 9.65 2 10C2 10.35 2.02067 10.6873 2.062 11.012C2.104 11.3373 2.16667 11.6667 2.25 12ZM7.65 12H12.35C12.4 11.6667 12.4377 11.3373 12.463 11.012C12.4877 10.6873 12.5 10.35 12.5 10C12.5 9.65 12.4877 9.31267 12.463 8.988C12.4377 8.66267 12.4 8.33333 12.35 8H7.65C7.6 8.33333 7.56267 8.66267 7.538 8.988C7.51267 9.31267 7.5 9.65 7.5 10C7.5 10.35 7.51267 10.6873 7.538 11.012C7.56267 11.3373 7.6 11.6667 7.65 12ZM14.35 12H17.75C17.8333 11.6667 17.896 11.3373 17.938 11.012C17.9793 10.6873 18 10.35 18 10C18 9.65 17.9793 9.31267 17.938 8.988C17.896 8.66267 17.8333 8.33333 17.75 8H14.35C14.4 8.33333 14.4373 8.66267 14.462 8.988C14.4873 9.31267 14.5 9.65 14.5 10C14.5 10.35 14.4873 10.6873 14.462 11.012C14.4373 11.3373 14.4 11.6667 14.35 12ZM13.95 6H16.9C16.4167 5.16667 15.8123 4.44167 15.087 3.825C14.3623 3.20833 13.5333 2.75 12.6 2.45C12.9 3 13.1627 3.57067 13.388 4.162C13.6127 4.754 13.8 5.36667 13.95 6ZM8.1 6H11.9C11.7 5.26667 11.4417 4.575 11.125 3.925C10.8083 3.275 10.4333 2.65 10 2.05C9.56667 2.65 9.19167 3.275 8.875 3.925C8.55833 4.575 8.3 5.26667 8.1 6ZM3.1 6H6.05C6.2 5.36667 6.38767 4.754 6.613 4.162C6.83767 3.57067 7.1 3 7.4 2.45C6.46667 2.75 5.63733 3.20833 4.912 3.825C4.18733 4.44167 3.58333 5.16667 3.1 6Z"
                  fill="var(--primary)"
                />
              </svg>
              Languages:</n
            >
            ${this.languages}
          </p>
          <p>
            <n class="text-secondary"
              ><svg
                width="22"
                height="22"
                viewBox="0 0 22 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M11.89 10.1C10.11 9.51 9.25 9.14 9.25 8.2C9.25 7.18 10.36 6.81 11.06 6.81C12.37 6.81 12.85 7.8 12.96 8.15L14.54 7.48C14.39 7.03 13.72 5.56 12 5.24V4H10V5.26C7.52 5.82 7.51 8.12 7.51 8.22C7.51 10.49 9.76 11.13 10.86 11.53C12.44 12.09 13.14 12.6 13.14 13.56C13.14 14.69 12.09 15.17 11.16 15.17C9.34 15.17 8.82 13.3 8.76 13.08L7.1 13.75C7.73 15.94 9.38 16.53 10 16.71V18H12V16.76C12.4 16.67 14.9 16.17 14.9 13.54C14.9 12.15 14.29 10.93 11.89 10.1ZM2 20H0V14H6V16H3.52C5.13 18.41 7.88 20 11 20C13.3869 20 15.6761 19.0518 17.364 17.364C19.0518 15.6761 20 13.3869 20 11H22C22 17.08 17.08 22 11 22C7.28 22 3.99 20.15 2 17.33V20ZM0 11C0 4.92 4.92 0 11 0C14.72 0 18.01 1.85 20 4.67V2H22V8H16V6H18.48C16.87 3.59 14.12 2 11 2C8.61305 2 6.32387 2.94821 4.63604 4.63604C2.94821 6.32387 2 8.61305 2 11H0Z"
                  fill="var(--primary)"
                />
              </svg>
              Currency:</n
            >
            ${this.currencies}
          </p>
          <p>
            <n class="text-secondary"
              ><svg
                width="22"
                height="22"
                viewBox="0 0 22 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M14 22H12V20H14V22ZM18 20H16V22H18V20ZM14 16H12V18H14V16ZM6 20H4V22H6V20ZM6 16H4V18H6V16ZM18 16H16V18H18V16ZM14 12H12V14H14V12ZM18 12H16V14H18V12ZM20 8C20.5304 8 21.0391 8.21071 21.4142 8.58579C21.7893 8.96086 22 9.46957 22 10V22H20V10H10V22H8V14H2V22H0V14C0 13.4696 0.210714 12.9609 0.585786 12.5858C0.960859 12.2107 1.46957 12 2 12H8V10C8 9.46957 8.21071 8.96086 8.58579 8.58579C8.96086 8.21071 9.46957 8 10 8V6C10 5.46957 10.2107 4.96086 10.5858 4.58579C10.9609 4.21071 11.4696 4 12 4H14V0H16V4H18C18.5304 4 19.0391 4.21071 19.4142 4.58579C19.7893 4.96086 20 5.46957 20 6V8ZM18 8V6H12V8H18Z"
                  fill="var(--primary)"
                />
              </svg>
              Capital:</n
            >
            ${this.capital}
          </p>
        </div>
        <div class="col-lg-2 col-sm-12 mt-4 mt-lg-0">
          <h4>
            <svg
              class="mb-1"
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 0L14.3 2.3L11.41 5.17L12.83 6.59L15.7 3.7L18 6V0H12ZM0 6L2.3 3.7L5.17 6.59L6.59 5.17L3.7 2.3L6 0H0V6ZM6 18L3.7 15.7L6.59 12.83L5.17 11.41L2.3 14.3L0 12V18H6ZM18 12L15.7 14.3L12.83 11.41L11.41 12.83L14.3 15.7L12 18H18V12Z"
                fill="var(--primary)"
              />
            </svg>
            Border states:
          </h4>
          <ul class="list-unstyled">
            <li><a href="#">${this.borders}</a></li>
           
          </ul>
        </div>
      </div>
    </div>

    <div class="col-12" id="map-appender">
      <div class="col-12 mx-auto map-wrapper">
        <iframe
          id="map-main"
          class="map-main rounded-3"
          title="mapgoogle"
          src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d516069.8849273327!2d34.80445026165621!3d31.81620169048282!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sil!4v1675378049033!5m2!1sen!2sil"
          style="border: 0"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  </div>`;
  }
}