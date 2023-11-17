const listItem = (data, id) => {
  return `
    <li>
        <label>
            <input id="${id}" type="checkbox" value="${id}" />
            <span class="item-title">${data.title}</span>
        </label>
        <button value="${id}"  class="btn waves-effect waves-light deep-orange accent-4">Supprimer</button>
    </li>
    `;
};

export default listItem;
