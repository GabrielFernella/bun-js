export default interface UseCase<E, S>{
  exec(param: E): Promise<S>
}