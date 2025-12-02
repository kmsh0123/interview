export const createTodo = async (data : {name : string,isTodo : boolean}) => {
    const {name,isTodo} = data;

    return prisma.todo.create({
        data :{
            name,
            isTodo
        }
    })
}

export const getTodos = async () => {
    return prisma.todo.findMany();
}

export const getTodoById = async (id: number) => {
  return prisma.todo.findUnique({
    where: { id },
  });
};

export const updateTodo = async (
  id: number,
  data: { name?: string; isTodo?: boolean }
) => {
  return prisma.todo.update({
    where: { id },
    data,
  });
};

export const deleteTodo = async (id: number) => {
  return prisma.todo.delete({
    where: { id },
  });
};