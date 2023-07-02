/* ARTICLE API */
/* API */
/**
 *  @swagger
 *  /api:
 *      get:
 *          summary: API ini digunakan untuk menampilkan pesan test
 *          description: API ini digunakan untuk menampilkan pesan test
 *          responses:
 *              200:
 *                  description: OK
 *                  content:
 *                      application/json:
 *                          schema:
 *                              type: object
 *                              properties:
 *                                  message:
 *                                      type: string
 */

/* from v1 */
/**
 *  @swagger
 *  /api/v1:
 *      get:
 *          summary: API ini digunakan untuk menampilkan pesan from v1
 *          description: API ini digunakan untuk menampilkan pesan from v1
 *          responses:
 *              200:
 *                  description: OK
 *                  content:
 *                      application/json:
 *                          schema:
 *                              type: object
 *                              properties:
 *                                  message:
 *                                      type: string
 */

/**
 *  @swagger
 *  tags:
        - name: players
        description: Everything about your Players
 */

/* Get and Create Player Data */
/**
 *  @swagger
 *  /api/v1/players/:
 *      get:
 *          tags: 
 *            - players
 *          summary: API ini digunakan untuk mengambil data player
 *          description: API ini digunakan untuk mengambil semua data player dalam format JSON
 *          responses:
 *              200:
 *                  description: Daftar Data Player.
 *                  content:
 *                      application/json:
 *                          schema:
 *                              type: object
 *                              properties:
 *                                  status:
 *                                      type: string
 *                                  data:
 *                                      type: array
 *                                      items:
 *                                          type: object
 *                                          properties:
 *                                              id:
 *                                                  type: integer
 *                                                  description: id dari player
 *                                                  example: 1
 *                                              username:
 *                                                  type: string
 *                                                  description: username dari player
 *                                                  example: PussySlayer613
 *                                              email:
 *                                                  type: string
 *                                                  description: email dari player
 *                                                  example: pussy.slay3r@gmail.com
 *                                              password:
 *                                                  type: string
 *                                                  description: password dari player
 *                                                  example: $2b$10$D1Ok/SaQ6VeKKFVpXIZb4ek3g7M8F0bPi8FHj8o1mgsomh1cDm4cO
 *                                              experience:
 *                                                  type: integer
 *                                                  description: experience dari player
 *                                                  example: 600000
 *                                              lvl:
 *                                                  type: integer
 *                                                  description: lvl dari player
 *                                                  example: 600
 *                                              createdAt:
 *                                                  type: string
 *                                                  format: date-time
 *                                                  description: waktu data dibuat
 *                                                  example: 2023-07-02 12:10:22.687 +0700
 *                                              updatedAt:
 *                                                  type: string
 *                                                  format: date-time
 *                                                  description: waktu data diupdate
 *                                                  example: 2023-07-02 12:10:22.687 +0700
 *      post:
 *          tags: 
 *              - players
 *          summary: API ini digunakan untuk menambahkan data player
 *          description: API ini digunakan untuk menambahkan data player dalam format JSON
 *          requestBody:
 *              required: true
 *              content:
 *                      application/json:
 *                          schema:
 *                              type: object
 *                              properties:
 *                                      username:
 *                                                  type: string
 *                                                  description: username dari player
 *                                                  example: PussySlayer613
 *                                      email:
 *                                                  type: string
 *                                                  description: email dari player
 *                                                  example: pussy.slay3r@gmail.com
 *                                      password:
 *                                                  type: string
 *                                                  description: password dari player
 *                                                  example: $2b$10$D1Ok/SaQ6VeKKFVpXIZb4ek3g7M8F0bPi8FHj8o1mgsomh1cDm4cO
 *                                      experience:
 *                                                  type: integer
 *                                                  description: experience dari player
 *                                                  example: 600000                             
 *          responses:
 *              200:
 *                  description: Sukses Menambah Player.
 *                  content:
 *                      application/json:
 *                          schema:
 *                              type: object
 *                              properties:
 *                                  status:
 *                                      type: string
 *                                  data:
 *                                      type: array
 *                                      items:
 *                                          type: object
 *                                          properties:
 *                                              id:
 *                                                  type: integer
 *                                                  description: id dari artikel
 *                                                  example: 1
 *                                              username:
 *                                                  type: string
 *                                                  description: username dari player
 *                                                  example: PussySlayer613
 *                                              email:
 *                                                  type: string
 *                                                  description: email dari player
 *                                                  example: pussy.slay3r@gmail.com
 *                                              password:
 *                                                  type: string
 *                                                  description: password dari player
 *                                                  example: $2b$10$D1Ok/SaQ6VeKKFVpXIZb4ek3g7M8F0bPi8FHj8o1mgsomh1cDm4cO
 *                                              experience:
 *                                                  type: integer
 *                                                  description: experience dari player
 *                                                  example: 600000
 *                                              lvl:
 *                                                  type: integer
 *                                                  description: lvl dari player
 *                                                  example: 600
 */

/* get Data, Update, Delete Player by their ID */
/**
 * @swagger
 * /api/v1/players/:id:
 *      get:
 *          tags: 
 *              - players
 *          summary: Get Player by ID
 *          description: Mengambil data player berdasarkan ID mereka.
 *          parameter: 
 *              - name: id
 *                in: path
 *                description: ID dari player
 *                required: true
 *                schema: 
 *                  type: string                           
 *          responses:
 *              '200':
 *                  description: Success, data ditemukan
 *                  content:
 *                      apllication/json:
 *                          schema:
 *                              type: object
 *                              properties:
 *                                              id:
 *                                                  type: integer
 *                                                  description: id dari artikel
 *                                                  example: 1
 *                                              username:
 *                                                  type: string
 *                                                  description: username dari player
 *                                                  example: PussySlayer613
 *                                              email:
 *                                                  type: string
 *                                                  description: email dari player
 *                                                  example: pussy.slay3r@gmail.com
 *                                              password:
 *                                                  type: string
 *                                                  description: password dari player
 *                                                  example: $2b$10$D1Ok/SaQ6VeKKFVpXIZb4ek3g7M8F0bPi8FHj8o1mgsomh1cDm4cO
 *                                              experience:
 *                                                  type: integer
 *                                                  description: experience dari player
 *                                                  example: 600000
 *                                              lvl:
 *                                                  type: integer
 *                                                  description: lvl dari player
 *                                                  example: 600
 *              '404':
 *                  description: Player not found 
 *      put:
 *          tags: 
 *              - players
 *          summary: Update Player Data by ID
 *          description: Mengubah data player berdasarkan ID mereka.
 *          parameter: 
 *              - name: id
 *                in: path
 *                description: ID dari player
 *                required: true
 *                schema: 
 *                  type: string
 *          requestBody:
 *              required: true
 *              content:
 *                      application/json:
 *                          schema:
 *                              type: object
 *                              properties:
 *                                      username:
 *                                                  type: string
 *                                                  description: username dari player
 *                                                  example: PussySlayer613
 *                                      email:
 *                                                  type: string
 *                                                  description: email dari player
 *                                                  example: pussy.slay3r@gmail.com
 *                                      password:
 *                                                  type: string
 *                                                  description: password dari player
 *                                                  example: $2b$10$D1Ok/SaQ6VeKKFVpXIZb4ek3g7M8F0bPi8FHj8o1mgsomh1cDm4cO
 *                                      experience:
 *                                                  type: integer
 *                                                  description: experience dari player
 *                                                  example: 600000  
 *          responses:
 *              '200':
 *                  description: Player with id:${id} updated succesfully!
 *              '404':
 *                  description: Player not found                                         
 *              '500':
 *                  description: Failed to Update    
 *      delete:
 *          tags: 
 *              - players
 *          summary: Delete Player by ID
 *          description: Menghapus data player berdasarkan ID mereka.
 *          parameter: 
 *              - name: id
 *                in: path
 *                description: ID dari player
 *                required: true
 *                schema: 
 *                  type: string                           
 *          responses:
 *              '200':
 *                  description: Player with id= ${id}, was deleted successfully
 *              '400':
 *                  description: Cannot delete Player with id=${id}. Maybe Player was not found!
 */

/* Update Player Experience by their ID */
/**
 * @swagger
 * /api/v1/players/exp/:id:
 *      post:
 *          tags: 
 *              - players
 *          summary: Update Player Experience by ID
 *          description: Mengubah player experience berdasarkan ID mereka.
 *          parameter: 
 *              - name: id
 *                in: path
 *                description: ID dari player
 *                required: true
 *                schema: 
 *                  type: string
 *          requestBody:
 *              required: true
 *              content:
 *                      application/json:
 *                          schema:
 *                              type: object
 *                              properties:
 *                                      experience:
 *                                                  type: integer
 *                                                  description: experience dari player
 *                                                  example: 600000  
 *          responses:
 *              '200':
 *                  description: Player with id = ${id} gain ${exp} experience. Total experience = ${player.experience}
 *              '404':
 *                  description: Player not found                                         
 *              '400':
 *                  description: Bad Request
 *                  content:
 *                      application/json:
 *                          schema:
 *                              oneOf:
 *                                  - $ref: '#/components/schemas/EmptyExpFieldError'
 *                                  - $ref: '#/components/schemas/CannotUpdatePlayerError'
 */