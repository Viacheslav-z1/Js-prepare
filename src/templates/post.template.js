export function renderPost(post, options) {
  const tag =
    post.type === "news"
      ? '<li class="tag tag-blue tag-rounded">Новость</li>'
      : '<li class="tag tag-rounded">Заметка</li>';


      const favorites = JSON.parse(localStorage.getItem("favorites")) || [];

      const candidate = favorites.find(p => p.id === post.id)

  const button = candidate ? `<button data-title='${post.title}' data-id="${post.id}" class='button-small button-round button-danger'>Удалить</button>`
    : `<button data-title='${post.title}' data-id="${post.id}" class='button-small button-round button-primary'>Сохранить</button>`;
  return `
      <div class="panel">
      <div class="panel-head">
        <p class="panel-title">${post.title}</p>
        <ul class="tags">
       ${tag}
        </ul>
      </div>
      <div class="panel-body">
        <p class="multi-line">${post.fulltext}</p>
      </div>
      <div class="panel-footer w-panel-footer">
        <small>${post.date}</small>
        ${options.withButton ? button : ''}
      </div>
    </div>
  `;
}
