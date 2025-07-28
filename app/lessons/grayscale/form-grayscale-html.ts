export const formGrayscaleHtml = `<div class="container">
  <div class="header">
    <p class="header-text">
      Setup your storage and choose the size that is appropriate for you.
    </p>
    <div class="billing-toggle">
      <p>Bill monthly</p>
      <div class="toggle-track">
        <div class="toggle-thumb"></div>
      </div>
      <p>Bill yearly</p>
    </div>
  </div>

  <div class="main">
    <form class="form">
      <input class="input" placeholder="Full name" />
      <input class="input" placeholder="Email" />
      <input class="input" placeholder="Password" />
      <input class="input" placeholder="Card number" />
      <button class="button">CREATE ACCOUNT</button>
    </form>

    <div class="plans">
      <div class="plan selected">
        <div class="plan-header">
          <p class="plan-title">Small</p>
          <div class="checkmark">&#10003;</div>
        </div>
        <div class="plan-info">
          <p><span class="plan-size">4-7 m<sup>2</sup></span> of storage</p>
          <p class="price">$40 / mo</p>
        </div>
      </div>

      <div class="plan">
        <div class="plan-header">
          <p class="plan-title">Medium</p>
        </div>
        <div class="plan-info">
          <p><span class="plan-size">7-12 m<sup>2</sup></span> of storage</p>
          <p class="price">$40 / mo</p>
        </div>
      </div>

      <div class="plan">
        <div class="plan-header">
          <p class="plan-title">Large</p>
        </div>
        <div class="plan-info">
          <p><span class="plan-size">12-20 m<sup>2</sup></span> of storage</p>
          <p class="price">$40 / mo</p>
        </div>
      </div>
    </div>
  </div>
</div>`