<template>
  <div class="card">
    <div class="card-header">
      <div class="col-4 d-flex justify-content-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          class="bi bi-plus-circle"
          viewBox="0 0 16 16"
        >
          <path
            d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"
          />
          <path
            d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"
          />
        </svg>
        Add Task
      </div>
    </div>
    <div class="card-body">
      <div class="col">
        <div class="row">
          <label for="title" class="mr-sm-2">Title:</label>
        </div>
        <div class="row">
          <input
            type="value"
            class="form-control"
            placeholder="Title is required"
            name="Title"
            id="Title"
          />
        </div>
        <div class="row">
          <label for="description" class="mr-sm-2">Description:</label>
        </div>
        <div class="row">
          <input
            type="value"
            class="form-control"
            placeholder="Description is required"
            name="description"
            id="description"
          />
        </div>
        <div class="row">
          <p>Deadline:</p>
        </div>
        <div class="row">
          <input type="date" id="ddl" name="ddl" />
        </div>
        <div class="row">
          <label for="priority" class="mr-sm-2">Priority:</label>
          <div class="form-check form-check-inline">
            <input
              class="form-check-input"
              type="radio"
              name="inlineRadioOptions"
              id="low"
              value="low"
            />
            <label class="form-check-label" for="low">Low</label>
          </div>
          <div class="form-check form-check-inline">
            <input
              class="form-check-input"
              type="radio"
              name="inlineRadioOptions"
              id="med"
              value="med"
            />
            <label class="form-check-label" for="med">Med</label>
          </div>
          <div class="form-check form-check-inline">
            <input
              class="form-check-input"
              type="radio"
              name="inlineRadioOptions"
              id="high"
              value="high"
            />
            <label class="form-check-label" for="high">High</label>
          </div>
        </div>
        <div class="row">
          <div class="container-fluid">
            <button
              type="button"
              class="btn btn-success float-right"
              id="submit"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-plus-circle"
                viewBox="0 0 16 16"
              >
                <path
                  d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"
                />
                <path
                  d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"
                />
              </svg>
              Add
            </button>
            <button
              type="button"
              class="btn btn-primary float-right"
              id="reset"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-slash-circle-fill"
                viewBox="0 0 16 16"
              >
                <path
                  d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-4.646-2.646a.5.5 0 0 0-.708-.708l-6 6a.5.5 0 0 0 .708.708l6-6z"
                />
              </svg>
              Cancle
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
