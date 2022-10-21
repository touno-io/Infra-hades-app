declare namespace App {
  export interface Setting {
    config: string
  }
  
  export interface UserSetting {
    color: string
    backgroundColor: string
  }
}

interface MousePosition {
  clientX: number,
  clientY: number,
  mouse?: number,
  x: number,
  y: number
}
